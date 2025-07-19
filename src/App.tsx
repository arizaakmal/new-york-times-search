import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ArticleList from "./components/ArticleList";
import { searchArticles } from "./services/api";
import type { Article } from "./types/article";

function App() {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError(null);
    setSearchQuery(query);

    try {
      const results = await searchArticles(query);
      setArticles(results);
    } catch (err) {
      setError("Failed to search articles. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-orange-50 text-gray-800">
        <div className="pt-16 pb-8">
          <div className="flex flex-col items-center">
            <img src="/new-york-times-logo.png" alt="The New York Times" className="w-80 h-auto mb-6" />
            <p className="text-2xl mb-8 text-center">Search for articles from the New York Times</p>
            <SearchBar onSearch={handleSearch} placeholder="Search articles..." loading={loading} />
            {error && <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">{error}</div>}
          </div>
        </div>
        <ArticleList articles={articles} searchQuery={searchQuery} />
      </div>
    </>
  );
}

export default App;
