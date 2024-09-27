import { Recipe } from '@/types/recipe'; // Import the Recipe type

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  // You can use the 'REGULAR' size image or fallback to the main image if needed
  const imageUrl = recipe.images?.REGULAR?.url || recipe.image;

  return (
    <div className="recipe-card">
      <img 
        src={imageUrl} 
        alt={recipe.label} 
        className="recipe-image"
      />
      <h2 className="recipe-title">{recipe.label}</h2>
      {/* Add more details if needed, like ingredients or other info */}
      //add url
      <a href={recipe.url} className="recipe-link">View Recipe</a>
    </div>
  );
};

export default RecipeCard;
