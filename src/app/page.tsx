"use client"

import React, { useState, useEffect } from 'react';
import { fetchRandomRecipes } from '@/lib/rapidapi';
import RecipeCard from './recipes/components/RecipeCard';
import { Recipe } from '@/types/recipe';

const RecipePage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const recipeData = await fetchRandomRecipes(5);
        setRecipes(recipeData);
      } catch (err) {
        setError('Failed to load recipes');
      } finally {
        setLoading(false);
      }
    };

    getRecipes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipePage;
