"use client";

import { ICartProduct } from "@/models/Cart";
import { IProduct } from "@/models/Product";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Define the context state type
interface AppState {
  cart: ICartProduct[];
  addProductToCart: (product: IProduct, quantity: number) => void;
  removeProductFromCart: (productId: string) => void;
  decreaseProductFromCart: (productId: string) => void;
  removeAllProductsFromCart: () => void;
  doesCartContain: (productId: string) => boolean;
  getProductQuantity: (productId: string) => number;
  totalPrice: number;
  totalQuantity: number;
}

// Define the default state with proper types
const defaultState: AppState = {
  cart: [],
  addProductToCart: (product: IProduct, quantity: number) => {},
  removeProductFromCart: (productId: string) => {},
  decreaseProductFromCart: (productId: string) => {},
  removeAllProductsFromCart: () => {},
  doesCartContain: (productId: string) => false,
  getProductQuantity: (productId: string) => 0,
  totalPrice: 0,
  totalQuantity: 0,
};

const AppContext = createContext<AppState>(defaultState);

// Type for the props of the AppWrapper component
interface AppWrapperProps {
  children: ReactNode;
}

export function AppWrapper({ children }: AppWrapperProps) {
  const [cart, setCart] = useState<ICartProduct[]>(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cart]);

  const addProductToCart = (product: IProduct, quantity: number) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item._id === product._id
      );

      if (existingProductIndex >= 0) {
        const newCart = prevCart.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        return newCart;
      } else {
        return [
          ...prevCart,
          {
            ...product,
            quantity: quantity,
          },
        ];
      }
    });
  };

  const removeProductFromCart = (productId: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item._id?.toString() !== productId)
    );
  };

  const removeAllProductsFromCart = () => {
    setCart([]);
  };

  const doesCartContain = (productId: string) => {
    const productIndex = cart.findIndex(
      (item) => item._id?.toString() === productId
    );
    return productIndex >= 0;
  };

  const getProductQuantity = (productId: string) => {
    const productIndex = cart.findIndex(
      (item) => item._id?.toString() === productId
    );
    if (productIndex >= 0) {
      return cart[productIndex].quantity;
    }
    return 0;
  };

  const decreaseProductFromCart = (productId: string) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex(
        (item) => item._id?.toString() === productId
      );

      if (productIndex >= 0) {
        const newCart = prevCart
          .map((item, index) =>
            index === productIndex
              ? {
                  ...item,
                  quantity: item.quantity > 1 ? item.quantity - 1 : 0,
                }
              : item
          )
          .filter((item) => item.quantity > 0);
        return newCart;
      }

      return prevCart;
    });
  };

  const cartProducts = cart.map((item: ICartProduct) => item);
  const totalPrice = cartProducts.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const totalQuantity = cartProducts.reduce((acc, curr) => acc + curr.quantity, 0);


  // const products = fetch("/api/products")


  const state: AppState = {
    cart,
    addProductToCart,
    removeProductFromCart,
    decreaseProductFromCart,
    removeAllProductsFromCart,
    doesCartContain,
    getProductQuantity,
    totalPrice,
    totalQuantity,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
