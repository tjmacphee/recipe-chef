import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

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
