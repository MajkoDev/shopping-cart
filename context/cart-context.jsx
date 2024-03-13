"use client";

import { createContext, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_ITEM":
      if (state.find((item) => item.id === action.item.id)) {
        return state.map((item) =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.item, quantity: 1 }];
      }

    case "DECREMENT_ITEM":
      if (state.find((item) => item.id === action.id)?.quantity === 1) {
        return state.filter((item) => item.id !== action.id);
      } else {
        return state.map((item) => {
          if (item.id === action.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }

    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.id);

    case "CLEAR_CART":
      return defaultCart;

    default:
      return state;
  }
}

const defaultCart = [];

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, defaultCart);

  const itemQuantity = (id) => {
    return cart.find((product) => product.id === id)?.quantity || 0;
  };

  const incrementItem = (id, title, price) => {
    dispatch({ type: "INCREMENT_ITEM", item: { id, title, price } });
  };
  const decrementItem = (id) => {
    dispatch({ type: "DECREMENT_ITEM", id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const cartCount = cart.reduce(
    (quantity, product) => product.quantity + quantity,
    0
  );

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
