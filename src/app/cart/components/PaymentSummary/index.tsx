"use client";
import React from "react";
import { useAppContext } from "@/hooks/AppContext";
import Link from "next/link";

const PaymentSummary = () => {
  const { totalPrice } = useAppContext();

  const formatPriceToNaira = (price: number): string => {
    return price.toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
    });
  };

  return (
    <div className="flex flex-col flex-grow-0 gap-6 px-4 py-6 bg-gray-50 rounded-[32px] max-w-[409px] mx-auto">
      <div>
        <h2 className="text-black font-medium">Promo code</h2>
        <form className="flex max-w-md mt-6 border border-grey-500 rounded-[100vw] px-4 items-center text-gray-900">
          <input
            className="flex-grow rounded-[100vw] px-2 py-3 text-lg outline-none placeholder:text-[#A9AAB4]"
            type="text"
            placeholder="Type here"
          />
          <button className="bg-[#3538CD] p-2 text-white w-[85px] rounded-[100vw]">
            Apply
          </button>
        </form>
      </div>
      <hr className="text-gray-300" />
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between text-[20px]">
          <p className="text-gray-500">Subtotal</p>
          <p className="text-black">{formatPriceToNaira(totalPrice)}</p>
        </div>
        <div className="flex items-center justify-between text-[20px]">
          <p className="text-gray-500">Discount</p>
          <p className="text-black">{formatPriceToNaira(0)}</p>
        </div>
        <div className="flex items-center justify-between text-[20px]">
          <p className="text-black">Total</p>
          <p className="text-black">{formatPriceToNaira(totalPrice)}</p>
        </div>
      </div>
      <Link href={"/checkout"} className="w-[100%]">
        <button
          type="button"
          className="bg-[#3538CD] p-2 text-white rounded-[100vw] w-[100%]"
        >
          Continue to checkout
        </button>
      </Link>
    </div>
  );
};

export default PaymentSummary;
