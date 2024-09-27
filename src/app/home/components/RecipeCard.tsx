import { Recipe } from '@/types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const imageUrl = recipe.image;

  return (
    <div className="recipe-card">
      <img 
        src={imageUrl} 
        alt={recipe.title} 
        className="recipe-image"
      />
      <h2 className="recipe-title">{recipe.title}</h2>
    </div>
  );
};

export default RecipeCard;