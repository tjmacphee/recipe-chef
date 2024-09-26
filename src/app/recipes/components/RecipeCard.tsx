import React from 'react';
import { Recipe } from '@/types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  if (!recipe) {
    return <div>No recipe data available</div>; // Handle case where recipe is undefined or null
  }

  return (
    <div className="recipe-card">
      {recipe.thumbnail_url ? (
        <img 
          src={recipe.thumbnail_url} 
          alt={recipe.name || 'Recipe Image'} 
          className="w-full h-auto" 
        />
      ) : (
        <div>No image available</div> // Fallback if no image is provided
      )}
      <h2 className="text-lg font-semibold">{recipe.name || 'No title available'}</h2> {/* Fallback for missing title */}
      <p>{recipe.description || 'No description available'}</p> {/* Fallback for missing description */}
      <p>Servings: {recipe.num_servings} {recipe.servings_noun_plural || 'servings'}</p> {/* Display servings */}
      <p>Total Time: {recipe.total_time_minutes} minutes</p> {/* Display total time */}
      {recipe.video_url && (
        <a href={recipe.video_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          Watch Recipe Video
        </a>
      )}
    </div>
  );
};

export default RecipeCard;
