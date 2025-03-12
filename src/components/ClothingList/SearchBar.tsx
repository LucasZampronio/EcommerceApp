import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [notFound, setNotFound] = useState<boolean>(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const found = onSearch(searchQuery);
      setNotFound(!found);
    }
  };

  return (
    <div className="w-full p-4">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3">
        <input
          type="text"placeholder="Search cloth"value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            if (notFound) setNotFound(false);
          }}
          className="flex-grow p-2 border rounded-md"
        />
        <button type="submit"className="bg-neutral-600 text-white px-4 py-2 rounded-md hover:bg-neutral-700 transition-colors"> Search </button>
      </form>
      {notFound && (
        <p className="text-red-500 mt-2">
          No product with this name.
        </p>
      )}
    </div>
  );
};

export default SearchBar;