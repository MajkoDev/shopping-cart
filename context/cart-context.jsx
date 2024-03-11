"use client";

import { createContext, useContext } from "react";

const CartContext = createContext();

export function useCart() {
  useContext(CartContext);
}

export function CartProvider({ children }) {
  return <CartContext.Provider>{children}</CartContext.Provider>;
}
