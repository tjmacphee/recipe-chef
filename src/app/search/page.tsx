import React from 'react';
import { fetchRecipesByQuery } from '@/lib/rapidapi';
import SearchResults from './searchResults';
import { RecipeAPIResponse, Recipe } from '@/types/recipe';

export const metadata = {
  title: 'Search Results',
};

const SearchPage = async ({ searchParams }: { searchParams: { query: string } }) => {
  const query = searchParams.query;
  let recipes: Recipe[] = [];

  try {
    const response: RecipeAPIResponse = await fetchRecipesByQuery(query);
    recipes = response.results.filter((recipe) => recipe.image && recipe.image !== '');
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }

  return <SearchResults initialRecipes={recipes} query={query} />;
};

export default SearchPage;