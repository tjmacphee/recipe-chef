import { RecipeAPIResponse, Recipe, Calories, Nutrient } from "@/types/recipe";

const SPOONACULAR_SEARCH_URL = 'https://api.spoonacular.com/recipes/complexSearch?number=10';
const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY as string;

export const fetchRecipesByQuery = async (query: string) => {
  const url = `${SPOONACULAR_SEARCH_URL}&query=${query}&addRecipeInformation=${true}&addRecipeNutrition=${true}&apiKey=${SPOONACULAR_API_KEY}`;
  const response = await fetch(url, {
    method: 'GET'
  });

  if (!response.ok) {
    console.log(await response.json());
    throw new Error('Failed to fetch recipes from Spoonacular');
  }

  const data = await response.json();

  // Function to determine calorie level and color
  const getCalorieInfo = (amount: number): Calories => {
    if (amount < 100) {
      return { amount, level: 'Low', color: '#238823d6' };
    } else if (amount < 300) {
      return { amount, level: 'Medium', color: '#FF8E00d6' };
    } else {
      return { amount, level: 'High', color: '#D2222Dd6' };
    }
  };

  // Process the results to extract calories and set them as an object
  const processedResults = data.results.map((recipe: Recipe) => {
    const caloriesNutrient = recipe.nutrition.nutrients.find((nutrient: Nutrient) => nutrient.name === 'Calories');
    const caloriesAmount = caloriesNutrient ? caloriesNutrient.amount : 0;
    const calories = getCalorieInfo(caloriesAmount);
    return {
      ...recipe,
      calories,
    };
  });

  if (processedResults.length < 1) {
    console.log('No results found in the response');
    throw new Error('No results found in the response');
  }

  return { ...data, results: processedResults } as RecipeAPIResponse;
};