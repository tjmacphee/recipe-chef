"use client";

import { Recipe } from '@/types/recipe';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Clock } from '@geist-ui/icons'

interface RecipeCardProps {
  recipe: Recipe;
  onError: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onError }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = recipe.image;
    img.onerror = () => {
      setHasError(true);
      onError();
    };
  }, [recipe.image, onError]);

  if (hasError) {
    return (
      <div className="recipe-card flex flex-col items-center w-full p-2">
        <p>Image failed to load.</p>
        <h2 className="recipe-title text-center text-lg font-semibold mt-2">
          {recipe.title}
        </h2>
      </div>
    );
  }

  return (
    <div className="recipe-card flex flex-col items-center w-full p-4 border rounded-lg shadow-md">
      <div className="image-container w-full max-w-xs h-48 relative mb-4">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="recipe-image"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <h2 className="recipe-title text-center text-lg font-semibold mb-2">
        {recipe.title}
      </h2>
      <div className="info-badges flex flex-wrap justify-center gap-2">
        {recipe.readyInMinutes && (
          <span className="badge bg-blue-500 text-white px-2 py-1 rounded clock">
            <Clock size={20} /> {recipe.readyInMinutes}m
          </span>
        )}
        {recipe.calories && (
          <span className={`badge text-white px-2 py-1 rounded`} style={{ backgroundColor: recipe.calories.color }}>
            {recipe.calories.amount} calories
          </span>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;