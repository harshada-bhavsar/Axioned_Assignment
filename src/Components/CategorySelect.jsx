import React, { useState } from "react";

const CategorySelect = ({ setCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("general");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCategory(event.target.value);
  };

  return (
    <div className="relative">
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="py-2 px-3 border border-gray-300 rounded-md shadow-sm 
                   hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      >
        <option value="general">General</option>
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
      </select>
    </div>
  );
};

export default CategorySelect;
