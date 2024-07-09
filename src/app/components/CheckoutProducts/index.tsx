import Image from "next/image";
import Link from "next/link";
import { ICartProduct } from "@/models/Cart";

type Prop = {
  products: ICartProduct[]
}

  const formatPriceToNaira = (price: number): string => {
    return price.toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
    });
  };

const CheckoutProducts = ({ products } : Prop) => {
  return ( 
      <div className="flex flex-col gap-6 items-start">
        <div className="flex flex-col gap-1 text-gray-900">
          <h2 className="font-medium text-2xl leading-[38.4px]">Product Information and Review</h2>
          <div className="flex flex-col gap-6">
            <p className="text-gray-500 text-xl font-medium leading-[25.6px] ">By placing your order, you agree with Catalog’s <Link href={"/"} className="text-blue-700 underline">privacy</Link> and <Link href={"/"} className="text-blue-700 underline">policy</Link></p>
            {products.map(product => {
              return (
                <div
                  key={product.name}
                  className="flex items-center gap-6 px-4 py-2 border-[1.5px] border-solid border-gray-300 rounded-3xl"
                >
                  <div className="w-[98px] h-[94px]">
                    <Image
                      src={product.images[0]}
                      alt=""
                      width={98}
                      height={94}
                      style={{ objectFit: "cover" }}
                      className="w-[98px] h-[94px] object-cover rounded-xl"
                    />
                  </div>
                  <div className="space-y-1 text-base">
                    <p className="text-[#3F4049] leading-[25.6px]">
                      {product.name} x{product.quantity}
                    </p>
                    <p className="text-[#202024] font-bold">
                      {formatPriceToNaira(product.price * product.quantity)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
   );
}
 
export default CheckoutProducts;