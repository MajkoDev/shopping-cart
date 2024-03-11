// component for store product

// ui
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

// icons
import { PlusIcon, MinusIcon } from "lucide-react";

export default function ProductCard({
  id,
  title,
  description,
  price,
  itemQuantity,
  incrementItem,
  decrementItem,
}) {
  let quantity = itemQuantity(id);

  return (
    <Card className="w-44 md:w-72 my-1 md:mx-2 shadow-md">
      <CardHeader>
        <CardTitle className="text-md">{title}</CardTitle>
      </CardHeader>
      <CardContent className="hidden md:block">
        <p className="text-sm">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col md:flex-row gap-2 justify-between items-center">
        <h2 className="font-bold">{price} Eur</h2>

        {quantity === 0 ? (
          <Button variant="outline" onClick={() => incrementItem(id, title, price)}>
            Add to Card
          </Button>
        ) : (
          <div className="flex flex-row gap-1.5">
            <Button
              variant="outline"
              onClick={() => incrementItem(id)}
              className="p-0 hover:cursor-pointer hover:bg-lime-400 w-9 h-9 flex items-center justify-center"
            >
              <PlusIcon className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              onClick={() => decrementItem(id)}
              className="p-0 hover:cursor-pointer hover:bg-rose-400 w-9 h-9 marker:flex items-center justify-center"
            >
              <MinusIcon className="w-6 h-6" />
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
