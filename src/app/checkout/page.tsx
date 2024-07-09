"use client";

import CheckoutPayment from "../components/CheckoutPayment";
import CheckoutProducts from "../components/CheckoutProducts";
import ShippingOptions from "../components/ShippingOption";
import homeStyles from "../home.module.scss";
import ShopProgress from "../components/ShopProgress";
import { useAppContext } from "@/hooks/AppContext";
import { ICartProduct } from "@/models/Cart";

const Checkout = () => {
  const { cart, totalPrice } = useAppContext();

  const products = cart.map((item: ICartProduct) => item);

  return (
    <main
      className={
        homeStyles.body +
        " w-screen flex flex-col items-center justify-center pt-[173px] mb-12"
      }
    >
      <ShopProgress active="checkout" />
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-6 items-start">
          <CheckoutProducts products={products} />
          <ShippingOptions />
        </div>
        <CheckoutPayment totalPrice={totalPrice}  />
      </div>
    </main>
  );
};

export default Checkout;
