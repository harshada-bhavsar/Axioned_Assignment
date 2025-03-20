import { useState } from "react";

const SearchFilter = ({ setSearchQuery }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 p-4 rounded-lg shadow-md w-full">
      {/* Search Bar */}
      <div className="relative w-full md:w-[60%]">
        <input
          type="text"
          placeholder="Search news..."
          value={searchText}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none 
                     focus:ring-2 focus:ring-blue-400 transition-all duration-300 shadow-sm"
        />
        <div className="absolute right-3 top-2 text-gray-500">🔍</div>
      </div>
    </div>
  );
};

export default SearchFilter;
