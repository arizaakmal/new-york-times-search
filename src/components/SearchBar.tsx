import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  loading?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = "Search articles...", loading = false }) => {
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
                     focus:border-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200
                     disabled:opacity-50 disabled:cursor-not-allowed
                     placeholder-gray-400 shadow-lg transition-all duration-200
                     hover:border-gray-500"
          />

          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            {loading ? (
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-800"></div>
            ) : (
              <svg className="h-6 w-6 text-gray-400 hover:text-gray-800 transition-colors cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" onClick={() => handleSubmit({ preventDefault: () => {} } as React.FormEvent)}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
