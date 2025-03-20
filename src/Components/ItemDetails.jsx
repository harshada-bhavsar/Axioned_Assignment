import React from "react";

const ItemDetails = ({ news, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
      <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-lg relative">
        <button className="absolute top-2 right-2 text-red-500 font-bold" onClick={closeModal}>✖</button>
        {news.urlToImage && <img src={news.urlToImage} alt={news.title} className="w-full h-48 object-cover rounded-md" />}
        <h2 className="text-xl font-bold mt-4">{news.title}</h2>
        <p className="text-gray-700 mt-2">{news.description || "No description available."}</p>
      </div>
    </div>
  );
};

export default ItemDetails;
