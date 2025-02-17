import React from "react";

const Navbar = ({ setSearch }) => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between">
      <h1 className="text-white text-xl font-bold">E-Commerce</h1>
      <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded"
        onChange={(e) => setSearch(e.target.value)}
      />
    </nav>
  );
};

export default Navbar;
