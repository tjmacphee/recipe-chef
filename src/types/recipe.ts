// Define the structure for the images
type RecipeImage = {
  url: string;
  width: number;
  height: number;
};

// Define the main recipe type
export type Recipe = {
  uri: string;
  id: string;
  label: string;
  image: string; // Main image URL
  url: string;
  images: {
    THUMBNAIL?: RecipeImage;
    SMALL?: RecipeImage;
    REGULAR?: RecipeImage;
  };
};

// Define the structure of the API response
export type RecipeAPIResponse = {
  hits: {
    recipe: Recipe;
  }[];
};
