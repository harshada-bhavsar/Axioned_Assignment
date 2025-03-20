import React, { useState } from "react";

const SearchFilter = ({ setSearchQuery }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setSearchQuery(e.target.value);
  };

  return (
    <div className="relative w-auto md:w-1/3">
      <input
        type="text"
        placeholder="Search News..."
        value={search}
        onChange={handleSearchChange}
        className="w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none 
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
      />
      <span className="absolute right-3 top-2 text-gray-400">🔍</span>
    </div>
  );
};

export default SearchFilter;
