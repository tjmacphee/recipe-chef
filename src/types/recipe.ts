// Define the nutrient type
export type Nutrient = {
  name: string;
  amount: number;
  unit: string;
  percentOfDailyNeeds: number;
};

// Define the nutrition type
export type Nutrition = {
  nutrients: Nutrient[];
};

// Define the calories type
export type Calories = {
  amount: number;
  level: 'Low' | 'Medium' | 'High';
  color: string;
};

// Define the main recipe type
export type Recipe = {
  id: number;
  title: string;
  image: string;
  imageType: string;
  readyInMinutes: number;
  calories: Calories;
  nutrition: Nutrition; // Keep the rest of the nutrients in the nutrition property
};

// Define the structure of the API response
export type RecipeAPIResponse = {
  results: Recipe[];
};