import { RecipeAPIResponse } from "@/types/recipe";

const SPOONACULAR_SEARCH_URL = 'https://api.spoonacular.com/recipes/complexSearch?number=10';
const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY as string;

export const fetchRecipesByQuery = async (query: string) => {
  const url = `${SPOONACULAR_SEARCH_URL}&query=${query}&apiKey=${SPOONACULAR_API_KEY}`;
  const response = await fetch(url, {
    method: 'GET'
  });

  if (!response.ok) {
    console.log(await response.json());
    throw new Error('Failed to fetch recipes from Spoonacular');
  }

  const data = await response.json();
  return data as RecipeAPIResponse;
};