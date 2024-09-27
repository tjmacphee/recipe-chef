// Define the main recipe type
export type Recipe = {
  id: number;
  title: string;
  image: string;
  imageType: string;
};

// Define the structure of the API response
export type RecipeAPIResponse = {
  results: Recipe[];
};