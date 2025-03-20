import React, { useState, useEffect } from "react";
import Pagination from "./Components/Pagination";
import SearchFilter from "./Components/SearchFilter";
import CategorySelect from "./Components/CategorySelect";
import SortSelect from "./Components/SortSelect"; // ✅ Import SortSelect
import axios from "axios";
import DataList from "./Components/DataList";

const API_KEY = "a8ffacca236446ad837993cffd12e954";
const BASE_URL = "https://newsapi.org/v2/top-headlines";

const App = () => {
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState(""); // ✅ New state for sorting

  const itemsPerPage = 10;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}?country=us&category=${category}&q=${searchQuery}&page=${currentPage}&pageSize=${itemsPerPage}&apiKey=${API_KEY}`
        );

        let fetchedNews = response.data.articles || [];

        // ✅ Apply sorting logic
        if (sortBy === "id") {
          fetchedNews.sort((a, b) => (a.publishedAt > b.publishedAt ? 1 : -1));
        } else if (sortBy === "title") {
          fetchedNews.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortBy === "relevance") {
          fetchedNews.sort((a, b) =>
            b.source.name.localeCompare(a.source.name)
          );
        }

        setNews(fetchedNews);
        setTotalPages(Math.ceil(response.data.totalResults / itemsPerPage));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
      setLoading(false);
    };

    fetchNews();
  }, [category, searchQuery, currentPage, sortBy]); // ✅ Added `sortBy` to dependencies

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">📰 News App</h1>

      {/* Filters (Search, Category, Sort) */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 mb-4">
        <SearchFilter setSearchQuery={setSearchQuery} />
        <CategorySelect setCategory={setCategory} />
        <SortSelect setSortBy={setSortBy} />
      </div>

      {/* News List */}
      {loading ? (
        <p className="text-center text-gray-600">Fetching news...</p>
      ) : (
        <>
          <DataList news={news} />
          {news.length > 0 && (
            <Pagination
              totalItems={news.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;
