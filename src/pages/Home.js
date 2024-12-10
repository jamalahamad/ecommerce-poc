import { products } from "../components/Filter.js";
import React, { useState } from "react";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard.js";

const Home = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (category) => {
    if (category) {
      setFilteredProducts(products.filter((p) => p.category === category));
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div>
      <h2>Home</h2>
      <Filter onFilter={handleFilter} />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;