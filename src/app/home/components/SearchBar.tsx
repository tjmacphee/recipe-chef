"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
  initialQuery?: string;  // Accept an optional initial query
}

const SearchBar: React.FC<SearchBarProps> = ({ initialQuery = '' }) => {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  // Update the query state when the initialQuery prop changes
  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  return (
    <form onSubmit={handleSearch} className="flex items-center justify-center w-full">
      <input
        type="text"
        placeholder="Search recipes by ingredient or nutrition..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-3 w-full border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-400 leading-[1.4rem]"
      />
      <button
        type="submit"
        className="p-3 bg-gradient-to-r from-[#009243] to-[#005d32] text-white rounded-r-full hover:bg-[#007f39] transition duration-200 border-none"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
