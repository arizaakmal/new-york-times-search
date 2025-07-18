import React from "react";
import type { Article } from "../types/article";

interface ArticleListProps {
  articles: Article[];
  searchQuery?: string;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, searchQuery }) => {
  if (articles.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-6">
      <h2 className="text-xl font-semibold mb-4">
        Showing {articles.length} results for:
        {searchQuery && <span className="text-gray-800 font-normal"> "{searchQuery}"</span>}
      </h2>
      <div className="space-y-4">
        {articles.slice(0, 5).map((article: Article, index) => (
          <div key={article._id || index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            {article.web_url ? (
              <a href={article.web_url} target="_blank" rel="noopener noreferrer">
                <h3 className="font-semibold text-xl text-gray-900 mb-2 hover:text-gray-700 hover:underline transition-colors duration-200 cursor-pointer">{article.headline?.main}</h3>
              </a>
            ) : (
              <h3 className="font-semibold text-xl text-gray-900 mb-2">{article.headline?.main}</h3>
            )}
            {article.byline?.original && <span>{article.byline.original}</span>}
            <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4 mb-2">
              <span>
                Published{" "}
                {new Date(article.pub_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            {article.abstract && <p className="text-gray-600 mb-3 leading-relaxed">{article.abstract}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
