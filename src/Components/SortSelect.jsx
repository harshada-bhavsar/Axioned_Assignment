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
        className="bg-white border border-gray-300 w-48 py-2 px-4 rounded-lg shadow-sm 
                   hover:bg-gray-100 transition-all duration-300"
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
