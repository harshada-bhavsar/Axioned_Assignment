import { useState } from "react";

const categories = [
  "General",
  "Technology",
  "Business",
  "Sports",
  "Health",
  "Science",
  "Entertainment",
];

const CategorySelect = ({ setCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCategory(category.toLowerCase());
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative flex justify-center items-center">
      {/*Category Dropdown Button (Fixed Alignment) */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="bg-white border border-gray-300 w-48 py-2 px-4 rounded-lg shadow-sm 
                   hover:bg-gray-100 transition-all duration-300 flex items-center justify-between"
      >
        <span>{selectedCategory}</span>
        <span className="text-gray-500">⏷</span>{" "}
        {/* Dropdown Symbol on Same Line */}
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <ul className="absolute top-full left-0 w-56 bg-white border border-gray-200 shadow-lg rounded-md mt-2 z-50">
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-3 cursor-pointer transition-all hover:bg-blue-100 ${
                selectedCategory === category ? "bg-blue-200 font-semibold" : ""
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategorySelect;
