"use client";

import { useAppContext } from "@/hooks/AppContext";
import styles from "./product_box.module.scss";
import { IProduct } from "@/models/Product";
import Image from "next/image";
import { ShoppingCart } from "iconsax-react";
import Link from "next/link";

type Prop = {
  product: IProduct;
};

const ProductBox = ({ product }: Prop) => {
  const {
    cart,
    addProductToCart,
    removeProductFromCart,
    doesCartContain,
    getProductQuantity,
  } = useAppContext();

  const handleAddProductToCart = (product: IProduct) => {
    addProductToCart(product, 1);
  };

  const handleRemoveProductFromCart = (product: IProduct) => {
    removeProductFromCart(product._id?.toString() || "");
  };

  return (
    <div className={styles.product_box}>
      <Image
        src={product.images[0]}
        width={280}
        height={310}
        className={styles.product_image}
        alt={product.name}
      />
      <div className={styles.product_sticker}>
        <div className={styles.product_sticker_ctn}>
          <div className="flex flex-row gap-[2px] justify-between w-[100%]">
            <div className="flex flex-col gap-4">
              <Link href={`/product/${product._id?.toString()}`}>
                <p className={styles.productName}>{product.name}</p>
              </Link>
              <b>₦{product.price}</b>
            </div>
            <button
              type="button"
              onClick={() => handleAddProductToCart(product)}
            >
              <div className={styles.add_to_cart}>
                <div className={styles.add_to_cart_btn}>
                  <ShoppingCart
                    size={24}
                    variant="Outline"
                    className="icon"
                    color="#ffffff"
                  />
                </div>
                {doesCartContain(product._id?.toString() ?? "") ? (
                  <>
                    <small className="text-sm font-medium text-gray-500">
                      {getProductQuantity(product._id?.toString() ?? "")} in
                      Cart &nbsp;-&nbsp;
                      <a onClick={() => handleRemoveProductFromCart(product)}>
                        Remove
                      </a>
                    </small>
                  </>
                ) : (
                  ""
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
