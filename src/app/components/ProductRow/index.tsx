"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useWindowSize } from "@/hooks/useWindowSize";
import "swiper/css";
import styles from "./product_row.module.scss";

type Prop = {
  products: JSX.Element[];
};

const ProductRow = ({ products }: Prop) => {
  const { width } = useWindowSize();
  const isMobile = width < 312 * products.length; // Overlapping logic

  return (
    <div className={styles.product_row}>
      {isMobile ? (
        <Swiper spaceBetween={32} slidesPerView={"auto"} >
          {products.map((product, index) => (
            <SwiperSlide key={index} className={styles.product_item}>
              {product}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className={styles.product_row_flex}>
          {products.map((product, index) => (
            <div key={index} className={styles.product_item}>
              {product}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductRow;
