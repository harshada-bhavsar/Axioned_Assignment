import { useState } from "react";
import ItemDetails from "./ItemDetails";

const DataList = ({ news }) => {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <div className="container mx-auto px-4">
      {/* News Grid - 3 items per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item, index) => (
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

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {item.description || "No description available."}
              </p>

              {/* Buttons */}
              <div className="mt-auto flex justify-between pt-4">
                <button
                  onClick={() => setSelectedNews(item)}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300"
                >
                  Read More
                </button>

                {/* Read Full Article Button - Opens the full article in a new tab */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-all duration-300"
                >
                  Read Full Article
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* News Modal */}
      {selectedNews && <ItemDetails news={selectedNews} closeModal={() => setSelectedNews(null)} />}
    </div>
  );
};

export default DataList;
