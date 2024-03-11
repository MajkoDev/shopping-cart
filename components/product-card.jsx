// component for store product
import React from "react";

// ui
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export default function ProductCard({ product }) {
  return (
    <Card className="w-44 md:w-72 my-1 md:mx-2 shadow-md">
      <CardHeader>
        <CardTitle className="text-md">{product.title}</CardTitle>
      </CardHeader>
      <CardContent className="hidden md:block">
        <p className="text-sm">{product.description}</p>
      </CardContent>
      <CardFooter className="flex flex-col md:flex-row gap-2 justify-between items-center">
        <h2 className="font-bold">{product.price} Eur</h2>
        <Button variant="outline">Add to Card</Button>
      </CardFooter>
    </Card>
  );
}
