"use client";

// components
import ProductCard from "@/components/product-card";
import CartSummary from "@/components/cart-summary";
import ItemCard from "@/components/item-card";

// mock data
import data from "../data.json";

// zustand
import { ShoppingCartStore } from "./store";

export default function Home() {
  const { cart } = ShoppingCartStore();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 w-full">
      <div className="md:col-span-2 lg:col-span-3 bg-slate-50">
        <h2 className="font-bold text-center py-4 text-xl">Store</h2>
        {/* List of Products */}
        <div className="flex flex-wrap justify-center">
          {data.products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <div className="sticky top-0 h-screen overflow-y-auto bg-slate-100 flex flex-col justify-between">
        {/* Summary of Cart */}
        <CartSummary />

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
                  <ItemCard key={item.id} {...item} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
