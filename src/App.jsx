import React, { useState, useEffect } from "react";
import Pagination from "./Components/Pagination";
import SearchFilter from "./Components/SearchFilter";
import CategorySelect from "./Components/CategorySelect";
import SortSelect from "./Components/SortSelect";
import axios from "axios";
import ItemDetails from "./Components/ItemDetails";

const App = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("general");
  const [sortBy, setSortBy] = useState(""); 
  const [loading, setLoading] = useState(false);

  const pageSize = 10; 

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?category=${category}&q=${searchQuery}&page=${currentPage}&pageSize=${pageSize}&apiKey=${API_KEY}`
        );        

        let fetchedNews = response.data.articles || [];

        console.log("Fetched articles:", fetchedNews.length); 

        if (sortBy === "id") {
          fetchedNews.sort((a, b) => (a.source.id || "").localeCompare(b.source.id || ""));
        } else if (sortBy === "title") {
          fetchedNews.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortBy === "relevance") {
          fetchedNews.sort((a, b) => (b.description?.length || 0) - (a.description?.length || 0));
        }

        setNews(fetchedNews);
        setTotalPages(Math.ceil(response.data.totalResults / pageSize));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
      setLoading(false);
    };

    fetchNews();
  }, [currentPage, category, searchQuery, sortBy]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">📰 News App</h1>

      {/* Search, Category & Sorting Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <SearchFilter setSearchQuery={setSearchQuery} />
        <CategorySelect setCategory={setCategory} />
        <SortSelect setSortBy={setSortBy} />
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Fetching news...</p>
      ) : (
        <>
          {news.length > 0 ? (
            <ItemDetails news={news} />
          ) : (
            <p className="text-center text-gray-600">No news available...</p>
          )}

          {news.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;
