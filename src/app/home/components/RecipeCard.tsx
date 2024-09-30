"use client";

import { Recipe } from '@/types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
  onError: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onError }) => {
  return (
    <div className="recipe-card flex flex-col items-center w-full p-2">
      <img 
        src={recipe.image} 
        alt={recipe.title} 
        className="recipe-image object-cover"
        onError={onError}
      />
      <h2 className="recipe-title text-center text-lg font-semibold mt-2">
        {recipe.title}
      </h2>
    </div>
  );
};

export default RecipeCard;