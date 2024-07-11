import React from "react";

export const DishCard = ({
  img,
  price,
  oldPrice,
  name,
  description,
  discount,
}) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg p-4">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={img} alt={name} />
        {discount && (
          <span className="absolute top-2 left-2 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded">
            Скидка
          </span>
        )}
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="mt-4">
          <span className="text-2xl font-bold text-gray-800">{price} ₽</span>
          {oldPrice && (
            <span className="line-through text-gray-500 text-sm ml-2">
              {oldPrice} ₽
            </span>
          )}
          {discount && (
            <span className="ml-2 text-sm text-secondary">
              -15% Экономия {oldPrice - price} ₽
            </span>
          )}
        </div>
      </div>
      <div className=" pt-4 pb-2 flex justify-between">
        <button className="bg-primary text-white font-bold py-3 px-7 rounded">
          Купить
        </button>
        <button className="bg-secondary text-white font-bold py-3 px-7 rounded">
          В 1 клик
        </button>
      </div>
    </div>
  );
};
