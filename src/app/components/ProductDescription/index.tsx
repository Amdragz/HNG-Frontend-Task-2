import React from "react";
import Link from "next/link";

type Prop = {
  description: string;
};

const ProductDescription = ({ description }: Prop) => {
  return (
    <>
      <div className="space-x-10 text-gray-900 text-center">
        {/* Remember to design style for the links */}
        <Link href={"/"} className="hover:underline">
          Description
        </Link>

        <Link href={"/"}>Reviews</Link>
      </div>

      <div className="max-w-[1216px] mx-auto text-left">
        <div className="flex flex-col gap-8 text-gray-900 max-w-[1001px]">
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="product-description"
          />
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
