import React from "react";

const ItemDetails = ({ news, setSelectedNews }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((article, index) => (
        <div
          key={index}
          className="rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          onClick={() => setSelectedNews(article)} //Opens modal when clicked
        >
          {article.urlToImage ? (
            <img
              src={article.urlToImage}
              alt="News"
              className="w-full h-48 object-cover"
            />
          ) : (
            <div className="w-full h-48 flex items-center justify-center bg-gray-300 text-gray-600">
              No Image Available
            </div>
          )}

          <div className="p-4">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-gray-600">
              {article.description
                ? article.description.slice(0, 100) + "..."
                : "No description available."}
            </p>
            <button className="text-blue-500 hover:underline mt-2">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemDetails;
