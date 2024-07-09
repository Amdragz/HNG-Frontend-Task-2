"use client";

import styles from "./product_grid.module.scss";

type Prop = {
  products: JSX.Element[];
};

const ProductGrid = ({ products }: Prop) => {

  return (
    <div id="shop" className={styles.product_grid}>
      {products.map((product, index) => (
        <div key={index} className={styles.product_item}>
          {product}
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
