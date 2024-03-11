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
  function itemQuantity(id) {
    // find item based on ID and get quantity or return 0
    return cart.find((product) => product.id === id)?.quantity || 0;
  }

  // increment items quantity
  function incrementItem(id, title, price) {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        // if the item doesn't exist, add it to the cart and set quantity to 1
        return [...currItems, { id, title, price, quantity: 1 }];
      } else {
        // if the item exists, increase its quantity by 1
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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 w-full">
      <div className="md:col-span-2 lg:col-span-3 bg-slate-50">
        <h2 className="font-bold text-center py-4 text-xl">Store</h2>
        {/* List of Products */}
        <div className="flex flex-wrap justify-center">
          {data.products.map((product) => (
            <ProductCard
              key={product.id}
              itemQuantity={itemQuantity}
              incrementItem={incrementItem}
              decrementItem={decrementItem}
              {...product}
            />
          ))}
        </div>
      </div>

      <div className="sticky top-0 h-screen overflow-y-auto bg-slate-100 flex flex-col justify-between">
        {/* Summary of Cart */}
        <CartSummary
          cartCount={cartCount}
          totalPrice={totalPrice}
          clearCart={clearCart}
        />

        {/* Items in Cart */}
        <div className="flex-grow">
          <div className="flex flex-col gap-y-2 justify-center">
            {cart.length === 0 ? (
              <h1 className="text-center text-xl font-bold my-12">
                Cart is Empty.
              </h1>
            ) : (
              <>
                {cart?.map((item) => (
                  <ItemCard
                    key={item.id}
                    itemQuantity={itemQuantity}
                    incrementItem={incrementItem}
                    decrementItem={decrementItem}
                    removeItem={removeItem}
                    {...item}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
