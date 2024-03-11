"use client";

// react hook
import { useState } from "react";

// components
import ProductCard from "@/components/product-card";
import CartSummary from "@/components/cart-summary";
import ItemCard from "@/components/item-card";

// mock data
import data from "../data.json";

// initial empty cart
const defaultCart = [];

export default function Home() {
  // state of shopping cart
  const [cart, setCart] = useState(defaultCart);

  // get quantity of particular item
  function itemQuantity(product) {
    const id = product.id;
    // find item based on ID and get quantity or return 0
    return cart.find((item) => item.id === id)?.quantity || 0;
  }

  // increment items quantity
  function incrementItem(product) {
    const id = product.id;
  }

  // decrement items quantity
  function decrementItem(product) {
    const id = product.id;
  }

  // remove item from cart
  function removeItem(product) {
    const id = product.id;
    // filter items in cart based on ID
    setCart((currItems) => currItems.filter((item) => item.id !== id));
  }

  // set cart to default state
  function clearCart() {
    setCart(defaultCart);
  }

  // get number of items in cart
  const cartCount = cart.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  // get total price of items in cart
  const totalPrice = cart.reduce(
    (total, item) => item.price * item.quantity + total,
    0
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 w-full">
      <div className="md:col-span-2 lg:col-span-3 bg-slate-50">
        <h2 className="font-bold text-center py-4 text-xl">Store</h2>
        {/* List of Products */}
        <div className="flex flex-wrap justify-center">
          {data.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="sticky top-0 h-screen overflow-y-auto bg-slate-100 flex flex-col justify-between">
        {/* Summary of Cart */}
        <CartSummary cartCount={cartCount} totalPrice={totalPrice} />

        <div className="flex-grow">
          {/* Items in Cart */}
          <div className="flex flex-col gap-y-2 justify-center">
            <ItemCard />
          </div>
        </div>
      </div>
    </div>
  );
}
