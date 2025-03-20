import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import ItemDetails from "./ItemDetails";

const API_KEY = "a8ffacca236446ad837993cffd12e954";
const BASE_URL = "https://newsapi.org/v2/top-headlines";

const DataList = ({ category, searchQuery }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNews, setSelectedNews] = useState(null);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}?country=us&category=${category}&apiKey=${API_KEY}`
        );
        setData(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, [category]);

  // Filter news based on search
  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description &&
        item.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container mx-auto px-4">
      {/* News Grid - 3 items per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-all duration-300 
                      hover:shadow-2xl hover:scale-105 border border-gray-200 hover:border-blue-400"
          >
            {/* Only Show Image if Available */}
            {item.urlToImage && (
              <div className="relative w-full">
                <img
                  src={item.urlToImage}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            )}

            {/* Content - Adjust height dynamically */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {item.description || "No description available."}
              </p>

              {/* Buttons - Pushed to bottom */}
              <div className="mt-auto flex justify-between pt-4">
                <button
                  onClick={() => setSelectedNews(item)}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300"
                >
                  Read More
                </button>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Full Article →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Component */}
      <div className="mt-6">
        <Pagination
          totalItems={filteredData.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      {/* News Modal */}
      {selectedNews && (
        <ItemDetails
          news={selectedNews}
          closeModal={() => setSelectedNews(null)}
        />
      )}
    </div>
  );
};

export default DataList;
