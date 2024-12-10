import React from "react";

const ProductCard = ({ product }) => (
  <div className="product-card">
    <h3>{product.name}</h3>
    <p>{product.category} - {product.subCategory}</p>
  </div>
);

export default ProductCard;