import React from "react";
import ProductDetails from "@/app/components/ProductDetails";
import ProductDescription from "@/app/components/ProductDescription";
import ProductRow from "@/app/components/ProductRow";
import ProductBox from "@/app/components/ProductBox";
import { IProduct } from "@/models/Product";
import { notFound } from "next/navigation";

async function fetchProductById(
  id: string
): Promise<{ product: IProduct; relatedProducts: IProduct[] } | null> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`
  );

  if (!response.ok) {
    return null;
  }

  return await response.json();
}

type Props = {
  params: {
    id: string;
  };
};

const ProductPage = async ({ params }: Props) => {
  const data = await fetchProductById(params.id);

  if (!data) {
    notFound();
  }

  const { product, relatedProducts } = data;

  const relatedProductBoxes = relatedProducts.map((product, index) => (
    <ProductBox key={index} product={product} />
  ));

  return (
    <main className="container mx-auto max-w-[1210px] mb-12">
      <ProductDetails product={product} />
      <hr className="max-w-[1216px] mx-auto border-2 border-solid  mb-16" />
      <ProductDescription description={product.htmlContent} />
      <h2 className="flex items-center gap-4 text-xl text-gray-900 font-medium mt-[72px] mb-8">
        Related Products{" "}
        <div className="w-11 border-2 border-solid border-gray-300"></div>
      </h2>
      <ProductRow products={relatedProductBoxes} />
    </main>
  );
};

export default ProductPage;
