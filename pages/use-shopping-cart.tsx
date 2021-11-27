import { NextPage } from "next";
import Layout from "../components/Layout";
import CartSummary from "../components/CartSummary";
import { useShoppingCart } from "use-shopping-cart";
import { useEffect } from "react";
import Cart from "../components/Cart";
const DonatePage: NextPage = () => {
  return (
    <Layout title="Shopping Cart | Next.js + TypeScript Example">
      <div className="page-container">
        <h1>Shopping Cart</h1>
        <Cart>
          <CartSummary />
        </Cart>
      </div>
    </Layout>
  );
};

export default DonatePage;
