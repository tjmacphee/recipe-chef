"use client";

import { Recipe } from '@/types/recipe';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface RecipeCardProps {
  recipe: Recipe;
  onError: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onError }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = recipe.image;
    img.onload = () => {
      setDimensions({ width: img.width, height: img.height });
    };
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
    <div className="recipe-card flex flex-col items-center w-full p-2">
      {dimensions.width && dimensions.height ? (
        <Image
          src={recipe.image}
          alt={recipe.title}
          className="recipe-image object-cover"
          width={dimensions.width}
          height={dimensions.height}
        />
      ) : (
        <p>Loading image...</p>
      )}
      <h2 className="recipe-title text-center text-lg font-semibold mt-2">
        {recipe.title}
      </h2>
    </div>
  );
};

export default RecipeCard;