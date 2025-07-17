import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  loading?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = "Search New York Times articles...", loading = false }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder={placeholder}
            disabled={loading}
            className="w-full h-16 px-6 pr-16 text-lg border-2 border-gray-300 rounded-xl 
                     focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100
                     disabled:opacity-50 disabled:cursor-not-allowed
                     placeholder-gray-400 shadow-lg transition-all duration-200
                     hover:border-gray-400"
          />

          {/* Search Icon */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            {loading ? (
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
            ) : (
              <svg className="h-6 w-6 text-gray-400 hover:text-blue-500 transition-colors cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" onClick={() => handleSubmit({ preventDefault: () => {} } as React.FormEvent)}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            )}
          </div>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="mt-4 w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold 
                   rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100
                   disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200
                   shadow-lg hover:shadow-xl"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Searching...
            </span>
          ) : (
            "Search Articles"
          )}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
