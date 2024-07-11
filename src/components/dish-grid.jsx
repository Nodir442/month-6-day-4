import React from "react";
import { DishCard } from "./dish-card";
import dishImg from "../../public/dish1.jpg";

const dishes = [
  {
    img: dishImg,
    price: 500,
    oldPrice: 660,
    name: "Говядина, кусок с/к",
    description:
      "Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.",
    discount: true,
  },
  {
    img: dishImg,
    price: 500,
    oldPrice: 660,
    name: "Говядина, кусок с/к",
    description:
      "Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.",
    discount: true,
  },
  {
    img: dishImg,
    price: 500,
    oldPrice: 660,
    name: "Говядина, кусок с/к",
    description:
      "Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.",
    discount: true,
  },
  {
    img: dishImg,
    price: 500,
    oldPrice: 660,
    name: "Говядина, кусок с/к",
    description:
      "Свинина, смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.",
    discount: true,
  },
];

export const DishGrid = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {dishes.map((product, index) => (
        <DishCard key={index} {...product} />
      ))}
    </div>
  );
};
