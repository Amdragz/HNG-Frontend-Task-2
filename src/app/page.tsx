import styles from "./home.module.scss";
import NewArrivals from "./components/NewArrivals";
import SearchForm from "./components/SearchForm";
import Link from "next/link";
import { Setting5, Category, Grid1, Menu } from "iconsax-react";
import HomeBanner from "./components/HomeBanner";
import ProductBox from "./components/ProductBox";
import { IProduct, ProductMock } from "@/models/Product";
import ProductRow from "./components/ProductRow";
import ProductGrid from "./components/ProductGrid";

async function fetchProducts(): Promise<IProduct[]> {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return await response.json();
    
  }catch{
    return [
      ProductMock,
      ProductMock,
      ProductMock,
      ProductMock,
    ];
  }
}

export default async function Home() {

  const products = await fetchProducts();

  const bulkProductBoxes = products.map((product, index) => (
    <ProductBox key={index} product={product} />
  ));

  const productBoxes = bulkProductBoxes.slice(4);
  const productRowBoxes = bulkProductBoxes.slice(0, 4);

  return (
    <main
      className={
        styles.body + " flex min-h-screen flex-col items-center justify-between"
      }
    >
      <NewArrivals />

      <div className="flex justify-center mt-16">
        <div className="flex flex-col items-center">
          <h1 className="text-[#202024] text-[40px] font-semibold">
            All Products
          </h1>
          <SearchForm />
        </div>
      </div>

      <div className="my-12 text-black px-4 container max-w-[1249px] mx-auto">
        <div className="flex items-center flex-shrink justify-between">
          <p className="flex gap-3 text-sm text-[#202024]">
            <Link href={"/"}>Home</Link> / <Link href={"/shop"}>Shop</Link>
          </p>
          <div className="flex items-center gap-16">
            <button className="flex items-center gap-2">
              <Setting5 size={24} variant="Outline" color="#202024" />
              Filters
            </button>

            <div className="relative w-[136px] hidden md:block">
              <select className="outline-none border-none bg-transparent appearance-none w-full">
                <option value={""}>Sort by latest</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48001C3.26002 9.19001 3.26002 8.71001 3.55002 8.42001C3.84002 8.13001 4.32002 8.13001 4.61002 8.42001L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42001C19.68 8.13001 20.16 8.13001 20.45 8.42001C20.74 8.71001 20.74 9.19001 20.45 9.48001L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z" fill="#202024"/>
                </svg>
              </div>
            </div>

            <div className="item-center gap-5 hidden md:flex">
              <button>
                <Category size={24} variant="Outline" color="#202024" />
              </button>
              <button>
                <Grid1 size={24} variant="Outline" color="#808190" />
              </button>
              <button>
                <Menu size={24} variant="Outline" color="#808190" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProductRow products={productRowBoxes} />

      <HomeBanner />

      <ProductGrid products={productBoxes} />
      <ProductGrid products={productBoxes} />
    </main>
  );
}
