"use client";

import { createContext, useContext, useState } from "react";

const defaultCart = [];

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(defaultCart);

  function itemQuantity(id) {
    return cart.find((product) => product.id === id)?.quantity || 0;
  }

  function incrementItem(id, title, price) {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, title, price, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  // decrement items quantity
  function decrementItem(id) {
    setCart((currItems) => {
      // check if the item with the given ID already exists in the cart
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  // remove item from cart
  function removeItem(id) {
    // filter items in cart based on ID
    setCart((currItems) => currItems.filter((item) => item.id !== id));
  }

  // set cart to default state
  function clearCart() {
    setCart(defaultCart);
  }

  // get number of items in cart
  const cartCount = cart.reduce(
    (quantity, product) => product.quantity + quantity,
    0
  );

  // get total price of items in cart
  const totalPrice = cart.reduce(
    (total, product) => product.price * product.quantity + total,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        itemQuantity,
        incrementItem,
        decrementItem,
        removeItem,
        clearCart,
        cartCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
