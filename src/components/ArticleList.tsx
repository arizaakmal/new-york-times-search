import React from "react";
import type { Article } from "../types/article";

interface ArticleListProps {
  articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  if (articles.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-6">
      <h2 className="text-xl font-semibold mb-4">Found {articles.length} articles</h2>
      <div className="space-y-4">
        {articles.slice(0, 5).map((article: Article, index) => (
          <div key={article._id || index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">{article.headline?.main}</h3>

            {article.abstract && <p className="text-gray-600 mb-3 leading-relaxed">{article.abstract}</p>}

            <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
              <span>Published: {new Date(article.pub_date).toLocaleDateString()}</span>

              {article.byline?.original && <span>By: {article.byline.original}</span>}
            </div>

            {article.web_url && (
              <div className="mt-3">
                <a href={article.web_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-800 hover:text-black font-medium transition-colors duration-200">
                  Read full article
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
