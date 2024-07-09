"use client";

import { ShoppingCart } from "iconsax-react";
import { useAppContext } from "@/hooks/AppContext";
import styles from "../../home.module.scss";

const CartIcon = () => {
  const { cart } = useAppContext();
  return (
    <div className={styles.cart_btn_ctn + " inline-flex flex-row"}>
      <ShoppingCart size={32} variant="Outline" color="#202024" />
      <span className={styles.cart_num + " text-sm font-medium"}>
        {cart.length}
      </span>
    </div>
  );
};

export default CartIcon;
