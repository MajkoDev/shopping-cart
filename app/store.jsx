import { create } from "zustand";

export const ShoppingCartStore = create((set) => ({
  cart: [],
  itemQuantity: (id) => {set((state) => {})},
  incrementItem: (id, title, price) => set((state) => ({})),
  decrementItem: (id) => set((state) => ({})),
  removeItem: (id) => set((state) => ({})),
  clearCart: () => set((state) => ({})),
  cartCount: 0,
  totalPrice: 0,
}));
