import React from "react";
import homeStyles from "../home.module.scss";
import CartProductList from "./components/CartProductsList";
import PaymentSummary from "./components/PaymentSummary";
import ShopProgress from "../components/ShopProgress";

const Cart = () => {
  return (
    <>
      <main
        className={
          homeStyles.body +
          " w-screen flex flex-col items-center justify-center pt-[173px]"
        }
      >
        <ShopProgress active="cart" />
        <div className="flex flex-row items-start justify-between container max-w-7xl p-4 mt-3">
          <CartProductList />
          <PaymentSummary />
        </div>
      </main>
    </>
  );
};

export default Cart;
