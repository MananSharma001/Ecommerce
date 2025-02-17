import React from "react";

const Filters = ({ setCategory, setPrice }) => {
  return (
    <div className="flex gap-4 p-4">
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Books">Books</option>
      </select>
      <input
        type="number"
        placeholder="Max Price"
        onChange={(e) => setPrice(e.target.value)}
      />
    </div>
  );
};

export default Filters;
