import { create } from "zustand";

const useShoppingCart = create((set) => ({
  cart: [],
  cartTotal: 0,
  totalItems: 0,
  itemQuantity: (id) => {
    set((state) => {});
  },
  incrementItem: (id, title, price) => set((state) => ({})),
  decrementItem: (id) => set((state) => ({})),
  removeItem: (id) => set((state) => ({})),
  clearCart: () => set({ cart: [], cartTotal: 0, totalItems: 0 }),
}));

function totalPrice(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function cartCount(cart) {
  return cart.reduce((total, item) => total + 1, 0);
}

export default useShoppingCart;
