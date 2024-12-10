import React, { useState } from "react";

// Dummy product data

export const products = [
    { id: 1, name: "Laptop", category: "Electronics", subCategory: "Computers" },
    { id: 2, name: "Headphones", category: "Electronics", subCategory: "Audio" },
    { id: 3, name: "Shirt", category: "Fashion", subCategory: "Clothing" },
  ];
  
  // Cascading Dropdown Filter Component
  
  const Filter = ({ onFilter }) => {
    const categories = [...new Set(products.map(p => p.category))];
    const [selectedCategory, setSelectedCategory] = useState("");
  
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
      onFilter(category);
    };
  
    return (
      <div>
        <select onChange={(e) => handleCategoryChange(e.target.value)}>
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
    );
  };
  
  export default Filter;
  