import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Cart from "../components/Cart";
import CartSummary from "../components/CartSummary";
import Layout from "../components/Layout";
import Products from "../components/Products";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Cart>
        <ul className="card-list">
          <li>
            <Link href="/use-shopping-cart">
              <a className="card cart-style-background">
                <h2 className="bottom">Use Shopping Cart</h2>
                <img src="/use-shopping-cart.png" />
              </a>
            </Link>
          </li>
        </ul>
        <Products />
      </Cart>
    </Layout>
  );
};

export default IndexPage;
