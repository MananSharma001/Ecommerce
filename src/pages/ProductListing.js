import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import productsData from "../data/products.json";

const ProductListing = () => {
  const [products, setProducts] = useState(productsData);
  const [filtered, setFiltered] = useState(productsData);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    let filteredData = products;
    if (category) filteredData = filteredData.filter(p => p.category === category);
    if (price) filteredData = filteredData.filter(p => p.price <= price);
    if (search) filteredData = filteredData.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    setFiltered(filteredData);
    setPage(1);
  }, [category, price, search]);

  return (
    <div>
      <Navbar setSearch={setSearch} />
      <Filters setCategory={setCategory} setPrice={setPrice} />
      <div className="grid grid-cols-3 gap-4 p-4">
        {filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} total={Math.ceil(filtered.length / itemsPerPage)} />
    </div>
  );
};

export default ProductListing;
