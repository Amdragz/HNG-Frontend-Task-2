"use client";

import Image from "next/image";
import Link from "next/link";
import { Add, Minus } from "iconsax-react";
import { useAppContext } from "@/hooks/AppContext";
import { IProduct } from "@/models/Product";

type Prop = {
  product: IProduct;
};

const ProductDetails = ({ product }: Prop) => {
  
  const {
    cart,
    addProductToCart,
    removeProductFromCart,
    decreaseProductFromCart,
    doesCartContain,
    getProductQuantity,
  } = useAppContext();

  const handleAddProductToCart = (product: IProduct) => {
    addProductToCart(product, 1);
  };

  const handleRemoveProductFromCart = (product: IProduct) => {
    removeProductFromCart(product._id?.toString() || "");
  };

  const handleDecreaseProductFromCart = (product: IProduct) => {
    decreaseProductFromCart(product._id?.toString() || "");
  };

  const formatPriceToNaira = (price: number): string => {
    return price.toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
    });
  };

  return (
    <>
      <h2 className="font-medium text-[#202024] text-[40px] text-center mb-[100px] pt-[60px]">
        Product Page
      </h2>

      <div className="flex gap-16 items-center max-w-[1101px] mb-[66px] mx-auto">
        <Image
          src={product.images[0]}
          alt=""
          width={525}
          height={556}
          objectFit="cover"
          className="h-[556px] w-[525px] rounded-3xl"
        />

        <div className="flex flex-col gap-8 relative">
          <div className="flex flex-col gap-6">
            <ul className="flex gap-6 font-medium text-gray-900">
              <li>
                <Link href={"/"}>Home /</Link>
              </li>
              <li>
                <Link href={"/"}>Shop /</Link>
              </li>
              <li>
                <Link href={"/"}>{product.category} /</Link>
              </li>
              <li>
                <Link href={"/"}>{product.name} /</Link>
              </li>
            </ul>
            <h2 className="text-8 text-gray-900 font-medium">{product.name}</h2>
          </div>

          <p className="space-x-4">
            <span className="text-[#808190]">N 4,800</span>{" "}
            <span className="text-[#3538CD]">N 2,800</span>
          </p>

          <p className="text-gray-700 text-sm text-left leading-7">
            {product.shortDescription}
          </p>

          <div className="flex gap-8">
            {doesCartContain(product._id?.toString() ?? "") ? (
              <div className="flex items-center space-x-4 text-gray-900">
                <button
                  className="px-[13px] border-2 border-solid border-gray-300 rounded-[100vw] text-black w-[50px] h-[50px] cursor-pointer"
                  onClick={() => handleAddProductToCart(product)}
                >
                  <Add variant="Outline" color="#292D32" />
                </button>
                <span>{getProductQuantity(product._id?.toString() ?? "")}</span>
                <button
                  className="px-[13px] border-2 border-solid border-gray-300 rounded-[100vw] text-black w-[50px] h-[50px] cursor-pointer"
                  onClick={() => handleRemoveProductFromCart(product)}
                >
                  <Minus variant="Outline" color="#292D32" />
                </button>
              </div>
            ) : (
              <button
                className="bg-[#3538CD] font-medium text-sm text-white rounded-[32px] w-[322px] h-[26]"
                onClick={() => handleAddProductToCart(product)}
              >
                Add to cart
              </button>
            )}
          </div>

          <div className="flex items-center text-right gap-8 max-w-7xl h-12 absolute -bottom-28 left-0 translate-y-4">
            <div className="space-x-4 text-gray-900">
              <span className="text-gray-700">Category:</span>{" "}
              <span className="text-gray-900">{product.category}</span>
            </div>
            <div className="h-full border-gray-400 border-[1.5px] border-solid"></div>
            <div className="flex items-center gap-4 text-gray-900">
              <span className="text-gray-600 text-[16px] font-medium leading-[48px]">
                share
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.33333 6.2V8.13333H11.0667C11.2 8.13333 11.2667 8.26667 11.2667 8.4L11 9.66667C11 9.73333 10.8667 9.8 10.8 9.8H9.33333V14.6667H7.33333V9.86667H6.2C6.06667 9.86667 6 9.8 6 9.66667V8.4C6 8.26667 6.06667 8.2 6.2 8.2H7.33333V6C7.33333 4.86667 8.2 4 9.33333 4H11.1333C11.2667 4 11.3333 4.06667 11.3333 4.2V5.8C11.3333 5.93333 11.2667 6 11.1333 6H9.53333C9.4 6 9.33333 6.06667 9.33333 6.2Z"
                  stroke="#17191C"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M9.99992 14.6666H5.99992C2.66659 14.6666 1.33325 13.3333 1.33325 9.99998V5.99998C1.33325 2.66665 2.66659 1.33331 5.99992 1.33331H9.99992C13.3333 1.33331 14.6666 2.66665 14.6666 5.99998V9.99998C14.6666 13.3333 13.3333 14.6666 9.99992 14.6666Z"
                  stroke="#17191C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.59992 13.7333C5.59992 14.3333 6.79992 14.6666 7.99992 14.6666C11.6666 14.6666 14.6666 11.6666 14.6666 7.99998C14.6666 4.33331 11.6666 1.33331 7.99992 1.33331C4.33325 1.33331 1.33325 4.33331 1.33325 7.99998C1.33325 9.19998 1.66659 10.3333 2.19992 11.3333L1.77369 12.9726C1.57897 13.7216 2.27218 14.3984 3.01624 14.1858L4.59992 13.7333Z"
                  stroke="#17191C"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11 9.899C11 10.007 10.976 10.118 10.9249 10.226C10.8738 10.334 10.8077 10.436 10.7206 10.532C10.5734 10.694 10.4111 10.811 10.2278 10.886C10.0476 10.961 9.85228 11 9.64196 11C9.3355 11 9.00801 10.928 8.66249 10.781C8.31698 10.634 7.97146 10.436 7.62894 10.187C7.28343 9.935 6.95593 9.656 6.64347 9.347C6.334 9.035 6.05458 8.708 5.80521 8.366C5.55884 8.024 5.36054 7.682 5.21632 7.343C5.07211 7.001 5 6.674 5 6.362C5 6.158 5.03605 5.963 5.10816 5.783C5.18027 5.6 5.29444 5.432 5.45368 5.282C5.64597 5.093 5.85628 5 6.07862 5C6.16274 5 6.24687 5.018 6.32198 5.054C6.4001 5.09 6.4692 5.144 6.52329 5.222L7.22033 6.203C7.27441 6.278 7.31347 6.347 7.34051 6.413C7.36755 6.476 7.38257 6.539 7.38257 6.596C7.38257 6.668 7.36154 6.74 7.31948 6.809C7.28042 6.878 7.22334 6.95 7.15123 7.022L6.92288 7.259C6.88983 7.292 6.87481 7.331 6.87481 7.379C6.87481 7.403 6.87782 7.424 6.88383 7.448C6.89284 7.472 6.90185 7.49 6.90786 7.508C6.96194 7.607 7.05508 7.736 7.18728 7.892C7.32248 8.048 7.4667 8.207 7.62293 8.366C7.78518 8.525 7.94141 8.672 8.10065 8.807C8.25689 8.939 8.38608 9.029 8.48823 9.083C8.50325 9.089 8.52128 9.098 8.54231 9.107C8.56635 9.116 8.59039 9.119 8.61743 9.119C8.6685 9.119 8.70756 9.101 8.74061 9.068L8.96895 8.843C9.04407 8.768 9.11617 8.711 9.18528 8.675C9.25438 8.633 9.32349 8.612 9.3986 8.612C9.45568 8.612 9.51577 8.624 9.58187 8.651C9.64797 8.678 9.71708 8.717 9.79219 8.768L10.7867 9.473C10.8648 9.527 10.9189 9.59 10.9519 9.665C10.982 9.74 11 9.815 11 9.899Z"
                  stroke="#17191C"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
              </svg>

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="7" fill="white" />
                <path
                  d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 10.8401 2.69135 13.2851 5.12174 14.3828C5.125 14.307 5.12867 14.2376 5.13182 14.178C5.13611 14.0969 5.13942 14.0341 5.13942 13.9988C5.13942 13.7885 5.28245 12.7452 5.28245 12.7452L6.15745 9.15264C6.02284 8.93389 5.92188 8.47115 5.92188 8.11778C5.92188 6.48557 6.83053 6.13221 7.38582 6.13221C8.09255 6.13221 8.2524 6.89783 8.2524 7.46153C8.2524 7.7597 8.09774 8.22642 7.93858 8.70669C7.76989 9.21572 7.59615 9.73997 7.59615 10.0949C7.59615 10.7848 8.27765 11.1298 8.7488 11.1298C9.99399 11.1298 11.1382 9.5649 11.1382 7.99999C11.1382 6.43509 10.4063 4.54206 8.00841 4.54206C5.61058 4.54206 4.53365 6.36778 4.53365 7.76442C4.53365 8.70672 4.88702 9.39663 5.0637 9.51442C5.11418 9.55929 5.2 9.69783 5.13942 9.89302C5.07885 10.0882 4.96835 10.524 4.92067 10.7175C4.91507 10.7624 4.86178 10.8387 4.69351 10.7848C4.48317 10.7175 3.14543 9.8762 3.14543 7.76442C3.14543 5.65264 4.80289 3.19591 8.00841 3.19591C11.2139 3.19591 12.8546 5.34975 12.8546 7.99999C12.8546 10.6502 10.7091 12.3413 9.07692 12.3413C7.77115 12.3413 7.25962 11.758 7.16707 11.4663L6.67067 13.3594C6.55347 13.6734 6.33481 14.2379 6.06519 14.7292C6.67968 14.9055 7.32881 15 8 15Z"
                  fill="#3F4049"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
