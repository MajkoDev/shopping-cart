"use client";
// component for shopping cart item

// ui
import { Card } from "./ui/card";

// icons
import { PlusIcon, MinusIcon, Trash2Icon } from "lucide-react";

// zustand
import { ShoppingCartStore } from "@/app/store";

export default function ItemCard({ id, title, quantity, price }) {
  const { incrementItem, decrementItem, removeItem } = ShoppingCartStore();

  return (
    <Card className="p-1 mx-2 lg:mx-4 flex flex-col gap-1 text-sm xl:text-md shadow-md">
      <div className="flex flex-row justify-between w-full text-md font-medium">
        <h2>{title}</h2>
        <div className="flex flex-row gap-3">
          <h3>
            <span className="text-slate-500">Q:</span> {quantity}
          </h3>
          <h3>10 Eur</h3>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2">
          <PlusIcon
            onClick={() => incrementItem(id)}
            className="w-6 h-6 p-1 border border-slate-200 rounded-md hover:cursor-pointer hover:bg-lime-400"
          />
          <MinusIcon
            onClick={() => decrementItem(id)}
            className="w-6 h-6 p-1 border border-slate-200 rounded-md hover:cursor-pointer hover:bg-rose-400"
          />
          <Trash2Icon
            onClick={() => removeItem(id)}
            className="w-6 h-6 p-1 border border-slate-200 rounded-md hover:cursor-pointer hover:bg-rose-500"
          />
        </div>
        <h3 className="font-medium">{price * quantity} Eur</h3>
      </div>
    </Card>
  );
}
