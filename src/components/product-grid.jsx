import React from "react";
import { ProductCard } from "./product-card";
import productImg1 from "../../public/productImg1.jpg";
import productImg2 from "../../public/productImg2.jpg";
import productImg3 from "../../public/productImg3.jpg";
import productImg4 from "../../public/productImg4.jpg";
import productImg5 from "../../public/productImg5.jpg";
import productImg6 from "../../public/productImg6.jpg";

export const products = [
  {
    img: productImg1,
    price: 299000,
    name: "Колбасные и мясные изделия",
    description: "Цена от 150 р\n56 товаров",
    backgroundColor: "bg-orange-500",
  },
  {
    img: productImg2,
    price: 16114285,
    name: "Молочные продукты",
    description:
      "Сыры, Десерты, Йогурты, Кисломолочная продукция, Молоко, Сметана, Творог, Творожная масса",
    backgroundColor: "bg-yellow-500",
  },
  {
    img: productImg3,
    price: 299000,
    name: "Морепродукты",
    description: "Рыба, Икра, Креветки",
    backgroundColor: "bg-green-500",
  },
  {
    img: productImg4,
    price: 299000,
    name: "Пиво",
    description: "Крафтовое пиво",
    backgroundColor: "bg-orange-400",
  },
  {
    img: productImg5,
    price: 299000,
    name: "Замороженные продукты",
    description: "Замороженные овощи, Замороженные фрукты",
    backgroundColor: "bg-teal-500",
  },
  {
    img: productImg6,
    price: 299000,
    name: "Мёд",
    description:
      "Мёд горный 0,25 кг, Мёд с облепихой 0,25 кг, Мёд с черникой 0,25 кг, Мёд с разнотравьем 0,25 кг, Мёд цветочный 0,25 кг",
    backgroundColor: "bg-blue-600",
  },
];

export const ProductGrid = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  );
};
