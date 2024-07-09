"use client";
import Image from "next/image";
import bag from "../../../../../public/assets/images/shirt_hanger.png";
import React from "react";
import { useAppContext } from "@/hooks/AppContext";
import { Trash } from "iconsax-react";
import CartItem from "../CartItem";
import { ICartProduct } from "@/models/Cart";
import Link from "next/link";

const CartProductList = () => {
  const { cart, totalQuantity, removeAllProductsFromCart } = useAppContext();

  const products = cart.map((item: ICartProduct) => item);

  const handleRemoveAllProductsFromCart = () => {
    removeAllProductsFromCart();
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center flex-col gap-6 border-2 border-solid border-gray-300 rounded-[32px] max-w-[730px] p-4 text-black container">
        <div className="flex items-center justify-between container">
          <div className="flex gap-2 items-baseline">
            <p className="font-normal text-[32px]">Cart</p>
            <span className="font-medium text-[#808190]">
              ({products.length} products)
            </span>
          </div>
          <div>
            <p
              className="flex gap-2 text-[#FF3565] font-medium text-xl cursor-pointer"
              onClick={() => handleRemoveAllProductsFromCart()}
            >
              <Trash variant="Outline" color="#FF3565" />
              Clear All
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 container">
          <div className="flex justify-between max-w-[504px] font-medium text-xl text-gray-900">
            <h2>Products & Price</h2>
            <h2>Count</h2>
          </div>
          <div className="flex flex-col gap-[24px]">
            {products.map((product: ICartProduct) => (
              <CartItem product={product} key={product.name} />
            ))}
            {products.length == 0 ? (
              <div className="w-[550px] flex flex-col items-center justify-center mt-4 mb-4">
                <p className="text-gray-900 text-xl">{"Your cart is empty"}</p>
                <p className="text-[#5F606D] text-[16px]">
                  {"Start adding some items to your cart"}
                </p>
                <Link href={"/#shop"} className="w-[100%]">
                  <button className="text-gray-900 w-[100%] mt-4 text-[16px] border-gray-800 border-[1.5px] border-solid rounded-[100vw] p-2 ">
                    Shop Now
                  </button>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-[#CC95C0] via-[#DBD4B4] to-[#7AA1D2] rounded-3xl flex items-center justify-center px-4 py-[18px] relative">
        <div className="font-medium flex flex-col items-center gap-2 px-6 py-2">
          <p className="text-gray-900 text-xl">Checkout the Newest T-Shirt</p>
          <p className="text-[#5F606D] text-[16px]">
            {"You won't be disappointed 🎒✨"}
          </p>
          <button className="text-gray-900 text-[16px] border-gray-800 border-[1.5px] border-solid rounded-[100vw] p-2 ">
            Shop Now
          </button>
        </div>
        <Image
          src={bag}
          alt=""
          width={171}
          height={82}
          objectFit="cover"
          className="w-[171px] h-[82px] object-cover absolute right-0 bottom-0"
        />
      </div>
    </div>
  );
};

export default CartProductList;
