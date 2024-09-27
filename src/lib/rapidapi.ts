import { RecipeAPIResponse } from "@/types/recipe";

const EDAMAM_SEARCH_URL = 'https://api.edamam.com/api/recipes/v2?type=public';
const APP_ID = process.env.EDAMAM_APP_ID;
const API_KEY = process.env.EDAMAM_API_KEY;

export const fetchRecipesByQuery = async (query: string) => {
  const url = `${EDAMAM_SEARCH_URL}&q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`;
  const response = await fetch(url, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch recipes from Edamam');
  }

  const data = await response.json();
  return data as RecipeAPIResponse;
};