import React from 'react';

export const ProductCard = ({ img, price, name, description, backgroundColor }) => {
  return (
    <div className={`p-4 ${backgroundColor} rounded-lg shadow-md`}>
      <img src={img} alt={name} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-2xl font-bold text-white">{name}</h2>
        <p className="text-white mt-2">{description}</p>
        <p className="text-white mt-4 text-lg font-semibold">{price.toLocaleString()} сум</p>
      </div>
    </div>
  );
}

