// /app/search/page.tsx
import React from 'react';
import { fetchRecipesByQuery } from '@/lib/rapidapi';
import RecipeCard from '../home/components/RecipeCard';
import { Recipe } from '@/types/recipe';

const extractRecipeId = (uri: string) => {
  // Extract the unique ID from the URI
  const parts = uri.split('#recipe_');
  return parts.length > 1 ? parts[1] : '';
};

const SearchPage = async ({ searchParams }: { searchParams: { query: string } }) => {
  const query = searchParams.query;
  let recipes: Recipe[] = [];

  try {
    const response = await fetchRecipesByQuery(query);

    // Extract the ID from the URI and assign it to each recipe's id field
    recipes = response.hits.map((hit) => {
      const recipe = hit.recipe;
      return {
        ...recipe,
        id: extractRecipeId(recipe.uri),
      };
    });
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Search Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
