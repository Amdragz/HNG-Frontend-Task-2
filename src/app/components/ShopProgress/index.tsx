import React from "react";
import { TickCircle, ArrowRight2 } from "iconsax-react";

type Prop = {
  active: "cart" | "checkout" | "payment" | null;
};

export default function ShopProgress({ active = null }: Prop) {
  return (
    <>
      <div className="flex items-center justify-between max-w-[380px] mx-auto text-gray-500 text-sm gap-4 mb-4">
        <div className="flex items-center gap-4">
          <TickCircle
            size={24}
            variant="Outline"
            color={
              active == "cart" || active == "checkout" || active == "payment"
                ? "#3538CD"
                : "#A4A5B0"
            }
          />
          <p>Cart</p>
          <span>
            <ArrowRight2
              size={16}
              variant="Outline"
              color={
                active == "cart" || active == "checkout" || active == "payment"
                  ? "#3538CD"
                  : "#A4A5B0"
              }
            />
          </span>
        </div>
        <div className="flex items-center gap-4">
          <TickCircle
            size={24}
            variant="Outline"
            color={
              active == "checkout" || active == "payment"
                ? "#3538CD"
                : "#A4A5B0"
            }
          />
          <p>Checkout</p>
          <span>
            <ArrowRight2
              size={16}
              variant="Outline"
              color={
                active == "checkout" || active == "payment"
                  ? "#3538CD"
                  : "#A4A5B0"
              }
            />
          </span>
        </div>
        <div className="flex items-center gap-4">
          <TickCircle
            size={24}
            variant="Outline"
            color={active == "payment" ? "#3538CD" : "#A4A5B0"}
          />
          <p>Payment</p>
          <span></span>
        </div>
      </div>
      <div className="flex items-center gap-3 self-left container max-w-7xl mx-auto px-4">
        <button className="w-10 h-10 flex items-center justify-center border border-solid border-gray-500 rounded-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.9998 20.67C14.8098 20.67 14.6198 20.6 14.4698 20.45L7.94979 13.93C6.88979 12.87 6.88979 11.13 7.94979 10.07L14.4698 3.55C14.7598 3.26 15.2398 3.26 15.5298 3.55C15.8198 3.84 15.8198 4.32 15.5298 4.61L9.00979 11.13C8.52979 11.61 8.52979 12.39 9.00979 12.87L15.5298 19.39C15.8198 19.68 15.8198 20.16 15.5298 20.45C15.3798 20.59 15.1898 20.67 14.9998 20.67Z" fill="#292D32"/>
          </svg>
        </button>
        <p className="text-xl text-gray-900 font-normal">Continue to shopping</p>
      </div>
    </>
  );
}
