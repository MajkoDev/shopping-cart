// components
import ProductCard from "@/components/product-card";
import CartSummary from "@/components/cart-summary";
import ItemCard from "@/components/item-card";

export default function Home() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 w-full">
      <div className="md:col-span-2 lg:col-span-3 bg-slate-50">
        <h2 className="font-bold text-center py-4 text-xl">Store</h2>
        {/* List of Products */}
        <div className="flex flex-wrap justify-center">
          <ProductCard />
        </div>
      </div>

      <div className="sticky top-0 h-screen overflow-y-auto bg-slate-100 flex flex-col justify-between">
        {/* Summary of Cart */}
        <CartSummary />

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
