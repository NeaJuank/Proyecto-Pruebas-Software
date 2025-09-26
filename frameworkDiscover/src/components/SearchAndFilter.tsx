import React from "react";
import { Search, Filter, X } from "lucide-react";

interface SearchAndFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  languages: string[];
}

export const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedLanguage,
  onLanguageChange,
  languages,
}) => {
  const categories = ["all", "frontend", "backend", "fullstack", "mobile"];

  const categoryColors = {
    all: "bg-gray-800 text-gray-300 border-gray-700",
    frontend: "bg-gray-800 text-gray-300 border-gray-700",
    backend: "bg-gray-800 text-gray-300 border-gray-700",
    fullstack: "bg-gray-800 text-gray-300 border-gray-700",
    mobile: "bg-gray-800 text-gray-300 border-gray-700",
  };

  const activeCategoryColors = {
    all: "bg-green-600 text-white border-green-400 shadow-[0_0_10px_rgba(34,197,94,0.4)]",
    frontend:
      "bg-green-600 text-white border-green-400 shadow-[0_0_10px_rgba(34,197,94,0.4)]",
    backend:
      "bg-green-600 text-white border-green-400 shadow-[0_0_10px_rgba(34,197,94,0.4)]",
    fullstack:
      "bg-green-600 text-white border-green-400 shadow-[0_0_10px_rgba(34,197,94,0.4)]",
    mobile:
      "bg-green-600 text-white border-green-400 shadow-[0_0_10px_rgba(34,197,94,0.4)]",
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl shadow-2xl p-6 mb-8 relative overflow-hidden">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-transparent to-green-400/5 opacity-50" />

      <div className="space-y-6 relative z-10">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search frameworks..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 text-gray-200 placeholder-gray-500 font-mono transition-all duration-300"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-400 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Categories */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Filter className="w-5 h-5 text-green-400" />
            <span className="font-medium font-mono text-gray-300">
              Category
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium font-mono transition-all duration-200 capitalize border ${
                  selectedCategory === category
                    ? activeCategoryColors[
                        category as keyof typeof activeCategoryColors
                      ]
                    : categoryColors[category as keyof typeof categoryColors] +
                      " hover:scale-105 hover:border-green-500 hover:text-green-300"
                }`}
              >
                {category === "all" ? "All Categories" : category}
              </button>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <span className="font-medium font-mono text-gray-300">
              Language
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onLanguageChange("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium font-mono transition-all duration-200 border ${
                selectedLanguage === "all"
                  ? "bg-green-600 text-white border-green-400 shadow-[0_0_10px_rgba(34,197,94,0.4)]"
                  : "bg-gray-800 text-gray-300 border-gray-700 hover:scale-105 hover:border-green-500 hover:text-green-300"
              }`}
            >
              All Languages
            </button>
            {languages.map((language) => (
              <button
                key={language}
                onClick={() => onLanguageChange(language)}
                className={`px-4 py-2 rounded-lg text-sm font-medium font-mono transition-all duration-200 border ${
                  selectedLanguage === language
                    ? "bg-green-600 text-white border-green-400 shadow-[0_0_10px_rgba(34,197,94,0.4)]"
                    : "bg-gray-800 text-gray-300 border-gray-700 hover:scale-105 hover:border-green-500 hover:text-green-300"
                }`}
              >
                {language}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Matrix overlay corners */}
      <div className="absolute top-4 left-4 text-green-400/30 font-mono text-xs">
        {"› filter.init()"}
      </div>
      <div className="absolute bottom-4 right-4 text-green-400/30 font-mono text-xs">
        {"[READY]"}
      </div>
    </div>
  );
};
