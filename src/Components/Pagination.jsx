const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
      {/* First Page Button */}
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 border rounded-md shadow-sm transition-all duration-300 text-sm sm:text-base ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-white hover:bg-gray-200"
        }`}
      >
        ⏮ First
      </button>

      {/* Previous Page Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 border rounded-md shadow-sm transition-all duration-300 text-sm sm:text-base ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-white hover:bg-gray-200"
        }`}
      >
        ◀ Prev
      </button>

      {/* Current Page Indicator */}
      <span className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md text-sm sm:text-base">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next Page Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 border rounded-md shadow-sm transition-all duration-300 text-sm sm:text-base ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-white hover:bg-gray-200"
        }`}
      >
        Next ▶
      </button>

      {/* Last Page Button */}
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 border rounded-md shadow-sm transition-all duration-300 text-sm sm:text-base ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-white hover:bg-gray-200"
        }`}
      >
        ⏭ Last
      </button>
    </div>
  );
};

export default Pagination;
