import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import styles from "./home.module.scss";
import logoPic from "../../public/logo.png";
import CartIcon from "./components/CartIcon";
import { AppWrapper } from "@/hooks/AppContext"; // Adjust the import path

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Catalog - HNG 11",
  description:
    "Catalog is a Submission fot the HNG Internship 11 Stage two Frontend task.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " overflow-x-hidden"}>
        <AppWrapper>
          <header
            className={
              styles.header +
              " bg-[#F1F2F3] max-w-[651px] mx-auto rounded-[42px] p-4 md:flex items-center justify-between hidden"
            }
          >
            <Link href={"/"}>
              <Image src={logoPic} alt="" height={48} width={160} />
            </Link>
            <ul className="flex space-x-8 text-[#808190] font-medium">
              <li>
                <Link href={"/"} className="hover:text-gray-800 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/#shop"} className="hover:text-gray-800 hover:underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link href={"/blog"} className="hover:text-gray-800 hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-6 justify-center">
              <Link
                href={"/login"}
                className="font-medium py-2.5 px-6 bg-[#3538CD] text-white rounded-3xl"
              >
                Login
              </Link>
              <Link href={"/cart"}>
                <CartIcon />
              </Link>
            </div>
          </header>
          {children}
          <footer
            className={
              styles.footer + " container mx-auto px-4 mb-4 mt-4 overflow-hidden"
            }
          >
            <div className="bg-[#F1F2F3] rounded-[24px] container mx-auto py-8 px-5 md:py-20 md:px-32">
              <div className="flex-col justify-center md:flex md:flex-row">
                <div className="flex flex-col justify-between">
                  <Link href={"/"} className="self-center md:self-auto mb-8 md:mb-0">
                    <Image src={logoPic} alt="" height={48} width={160} />
                  </Link>
                  <p
                    className={
                      styles.footer_created_at + " text-xl font-medium md:block hidden"
                    }
                  >
                    Created @2024
                  </p>
                </div>
                <div className="max-w-[241px] md:max-w-max mx-auto grid md:grid-cols-3 gap-6 grid-cols-2 font-medium text-[#808190]">
                  <div>
                    <p className={styles.footer_links_header}>Shop</p>
                    <ul className={styles.footer_links + " space-y-4 mt-3"}>
                      <li>
                        <a href="/">Totebags</a>
                      </li>
                      <li>
                        <a href="/">T-Shirts</a>
                      </li>
                      <li>
                        <a href="/">Oversized T-shirt</a>
                      </li>
                      <li>
                        <a href="/">Hoodies</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className={styles.footer_links_header}>Customer</p>
                    <ul className={styles.footer_links + " space-y-4 mt-3"}>
                      <li>
                        <a href="/">Partnership</a>
                      </li>
                      <li>
                        <a href="/">Selling</a>
                      </li>
                      <li>
                        <a href="/">Providing</a>
                      </li>
                      <li>
                        <a href="/">Affiliate</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className={styles.footer_links_header}>Security</p>
                    <ul className={styles.footer_links + " space-y-4 mt-3"}>
                      <li>
                        <a href="/">Cookies</a>
                      </li>
                      <li>
                        <a href="/">T & C</a>
                      </li>
                      <li>
                        <a href="/">Payments</a>
                      </li>
                      <li>
                        <a href="/">Privacy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p
                    className={
                      styles.footer_created_at + " text-xl text-center font-medium md:hidden mt-8 mt:mt-0"
                    }
                  >
                    Created @2024
                  </p>
              </div>
            </div>
          </footer>
        </AppWrapper>
      </body>
    </html>
  );
}
