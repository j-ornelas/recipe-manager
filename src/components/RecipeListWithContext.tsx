import { useRecipeSearch } from '../contexts/RecipeSearchContext';
export const RecipeListWithContext = () => {
  const { recipeList } = useRecipeSearch();
  return (
    <div>
      <h1>Recipe list (context):</h1>
      <ul>
        {recipeList.map((recipe) => (
          <li key={recipe}>{recipe}</li>
        ))}
      </ul>
    </div>
  );
};
