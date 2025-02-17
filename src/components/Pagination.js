import React from "react";

const Pagination = ({ page, setPage, total }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        className="p-2 bg-gray-200"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      <span className="px-4">{page} / {total}</span>
      <button
        className="p-2 bg-gray-200"
        onClick={() => setPage(page + 1)}
        disabled={page === total}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
