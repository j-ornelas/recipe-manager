interface Props {
  recipeList: string[];
}
export const RecipeList = ({ recipeList }: Props) => {
  return (
    <div>
      <h1>Recipe list:</h1>
      <ul>
        {recipeList.map((recipe) => (
          <li key={recipe}>{recipe}</li>
        ))}
      </ul>
    </div>
  );
};
