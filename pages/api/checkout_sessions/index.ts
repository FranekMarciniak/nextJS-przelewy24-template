import { NextApiRequest, NextApiResponse } from "next";

import { validateCartItems } from "use-shopping-cart/src/serverUtil";
import inventory from "../../../data/products.json";
import shippingOptions, { IShipingOption } from "../../../data/shiping-options";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2020-03-02",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Validate the cart details that were sent from the client.
      const cartItems = req.body;
      const line_items = validateCartItems(inventory, cartItems);
      // Create Checkout Sessions from body params.
      const params: any = {
        submit_type: "pay",
        billing_address_collection: "auto",
        payment_method_types: ["card", "p24"],
        shipping_address_collection: {
          allowed_countries: ["PL"],
        },
        line_items,
        shipping_options: [...shippingOptions],
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/use-shopping-cart`,
      };
      const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create(params);

      res.status(200).json(checkoutSession);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
