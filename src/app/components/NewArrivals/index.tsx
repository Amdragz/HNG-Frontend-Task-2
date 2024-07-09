/* eslint-disable @next/next/no-img-element */
"use client";

import styles from "./new_arrivals.module.scss";
import { IProduct } from "@/models/Product";

type Props = {
  products: IProduct[];
};

const NewArrivals = () => {
  return (
    <>
      <div className={styles.topographic + " w-[100vw] h-[100vh] absolute top-0 left-0"}>
        <img src="topographic_bg.svg" loading="lazy" alt="" height="100vh" width="100vw"/>
      </div>
      <div
        className={
          styles.ctn + " flex flex-col md:flex-row h-[90vh] md:justify-between items-center gap-8 md:gap-0 md:rounded-bl-[42px]"
        }
      >
        <div className={styles.texts + " "}>
          <h1>New Arrivals</h1>
          <a href="/">Browse Shop</a>
        </div>

        <div className={styles.newest + " "}></div>
      </div>
    </>
  );
};

export default NewArrivals;
