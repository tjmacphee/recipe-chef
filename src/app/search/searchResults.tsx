"use client";

import React, { useState } from 'react';
import RecipeCard from '../home/components/RecipeCard';
import SearchBar from '../home/components/SearchBar';
import { Recipe } from '@/types/recipe';

interface SearchResultsProps {
  initialRecipes: Recipe[];
  query: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ initialRecipes, query }) => {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);
  const [imageErrorIds, setImageErrorIds] = useState<number[]>([]);

  // Callback to handle image load errors
  const handleImageError = (id: number) => {
    setImageErrorIds((prev) => [...prev, id]);
  };

  // Filter out recipes with image load errors
  const filteredRecipes = recipes.filter(recipe => !imageErrorIds.includes(recipe.id));

  return (
    <div className="min-h-screen p-8">
      {/* Flex container to align the header and search bar horizontally */}
      <div className="flex items-center pb-8">
        <h1 className="text-3xl font-bold px-4">Search Results</h1>
        {/* Search bar aligned to the right of the header */}
        <div className="w-full max-w-6xl z-10"> {/* Adjust the width of the search bar */}
          <SearchBar initialQuery={query} />
        </div>
      </div>

      {filteredRecipes.length === 0 ? (
        <p className="text-xl">No recipes found. Please try a different search query.</p>
      ) : (
        <div className="flex flex-wrap">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="w-1/4 p-2 flex-grow-0 max-w-[25%]">
              <RecipeCard recipe={recipe} onError={() => handleImageError(recipe.id)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;