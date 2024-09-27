// /app/search/page.tsx
import React from 'react';
import { fetchRecipesByQuery } from '@/lib/rapidapi';
import RecipeCard from '../home/components/RecipeCard';
import { RecipeAPIResponse, Recipe } from '@/types/recipe';

const SearchPage = async ({ searchParams }: { searchParams: { query: string } }) => {
  const query = searchParams.query;
  let recipes: Recipe[] = [];

  try {
    const response: RecipeAPIResponse = await fetchRecipesByQuery(query);

    recipes = response.results.map((recipe) => {
      return {
        ...recipe,
      };
    });
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Search Results</h1>
      {recipes.length === 0 ? (
        <p className="text-xl">No recipes found. Please try a different search query.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
