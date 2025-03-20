import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded-md bg-white shadow-sm hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ⏮ First
      </button>

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded-md bg-white shadow-sm hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ◀ Prev
      </button>

      <span className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md">
        {currentPage} / {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded-md bg-white shadow-sm hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next ▶
      </button>

      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded-md bg-white shadow-sm hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ⏭ Last
      </button>
    </div>
  );
};

export default Pagination;
