"use client";

// ui
import { Button } from "@/components/ui/button";

// zustand
import { ShoppingCartStore } from "@/app/store";

export default function CartSummary() {
  const { cartCount, totalPrice, clearCart } = ShoppingCartStore();

  return (
    <div className="h-52 flex flex-col justify-center gap-y-2 bg-white rounded-b-md rounded-t-none m-3 mt-0 p-3 sticky top-0 shadow-lg">
      <h2 className="font-extrabold text-center mb-3">Summary of Cart</h2>
      <div className="flex flex-row justify-between text-md">
        <p className="text-slate-600 text-sm">Number of Items in Cart:</p>
        <p className="text-slate-950 font-bold">{cartCount} x</p>
      </div>
      <div className="flex flex-row justify-between text-md">
        <p className="text-slate-600 text-sm">Total Cart Count:</p>
        <p className="text-slate-950 font-bold">{totalPrice} Eur</p>
      </div>
      <Button variant="outline" className="h-8" onClick={clearCart}>
        Clear the Cart
      </Button>
      <Button>Checkout</Button>
    </div>
  );
}
