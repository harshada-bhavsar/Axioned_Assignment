import { useState } from "react";

const SortSelect = ({ setSortBy }) => {
  const [selectedSort, setSelectedSort] = useState("");

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
    setSortBy(event.target.value);
  };

  return (
    <div className="relative">
      <select
        value={selectedSort}
        onChange={handleSortChange}
        className="py-2 px-3 border border-gray-300 rounded-md shadow-sm 
                   hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      >
        <option value="">Sort By</option>
        <option value="id">ID</option>
        <option value="title">Title</option>
        <option value="relevance">Relevance</option>
      </select>
    </div>
  );
};

export default SortSelect;
