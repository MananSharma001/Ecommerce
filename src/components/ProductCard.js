import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <h2 className="font-bold">{product.name}</h2>
      <p>${product.price}</p>
      <p>⭐ {product.rating}</p>
    </div>
  );
};

export default ProductCard;
