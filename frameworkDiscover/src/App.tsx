import { useState, useMemo } from "react";
import { Header } from "./components/Header";
import { SearchAndFilter } from "./components/SearchAndFilter";
import { FrameworkCard } from "./components/FrameworkCard";
import { FrameworkModal } from "./components/FrameworkModal";
import { Statistics } from "./components/Statistics";
import { frameworks } from "./data/frameworks";
import type { Framework } from "./types/framework";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectedFramework, setSelectedFramework] = useState<Framework | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extract unique languages
  const languages = useMemo(() => {
    const allLanguages = frameworks.map((f) => f.language);
    return Array.from(new Set(allLanguages));
  }, []);

  // Filter frameworks based on search and filters
  const filteredFrameworks = useMemo(() => {
    return frameworks.filter((framework) => {
      const matchesSearch =
        framework.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        framework.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        framework.features.some((feature) =>
          feature.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "all" || framework.category === selectedCategory;
      const matchesLanguage =
        selectedLanguage === "all" || framework.language === selectedLanguage;

      return matchesSearch && matchesCategory && matchesLanguage;
    });
  }, [searchQuery, selectedCategory, selectedLanguage]);

  const handleViewDetails = (framework: Framework) => {
    setSelectedFramework(framework);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFramework(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background matrix effect */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-green-400 font-mono text-xs animate-pulse">
          {"01001000 01100101 01101100 01101100 01101111"}
        </div>
        <div
          className="absolute top-3/4 right-1/3 text-green-400 font-mono text-xs animate-pulse"
          style={{ animationDelay: "2s" }}
        >
          {">>> framework.scan()"}
        </div>
        <div
          className="absolute bottom-1/4 left-1/3 text-green-400 font-mono text-xs animate-pulse"
          style={{ animationDelay: "4s" }}
        >
          {"[SYSTEM_READY]"}
        </div>
      </div>

      <Header />

      <main className="container mx-auto px-4 py-8 relative z-10">
        <Statistics frameworks={frameworks} />

        <SearchAndFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedLanguage={selectedLanguage}
          onLanguageChange={setSelectedLanguage}
          languages={languages}
        />

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-400 font-mono">
            Showing{" "}
            <span className="font-semibold text-green-400">
              {filteredFrameworks.length}
            </span>{" "}
            framework{filteredFrameworks.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Framework Grid */}
        {filteredFrameworks.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4 opacity-50">🔍</div>
            <h3 className="text-xl font-semibold text-green-400 mb-2 font-mono">
              No frameworks found
            </h3>
            <p className="text-gray-400 font-mono">
              Try adjusting your search criteria or filters.
            </p>
            <div className="mt-4 text-xs font-mono text-gray-600">
              {"[ERROR: NO_RESULTS_FOUND]"}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFrameworks.map((framework) => (
              <FrameworkCard
                key={framework.id}
                framework={framework}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}

        <FrameworkModal
          framework={selectedFramework}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black to-gray-900 text-white py-8 mt-16 border-t border-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-transparent to-green-400/5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-gray-400 font-mono">
            © 2025 Framework Explorer. Built with React, TypeScript, and
            Tailwind CSS
          </p>
          <p className="text-gray-600 text-sm mt-2 font-mono">
            Explore, learn, and build amazing applications with the right tools
          </p>
          <div className="mt-4 text-xs font-mono text-green-400/50">
            {"[SYSTEM_STATUS: OPERATIONAL]"}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
