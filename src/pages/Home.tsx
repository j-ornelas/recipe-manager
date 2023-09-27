import { useState } from 'react';

import { RecipeSearch } from '../components/RecipeSearch';
import { RecipeList } from '../components/RecipesList';

export function Home() {
  const [recipeList, setRecipeList] = useState<string[]>([]);
  const handleSearch = (query: string) => {
    setRecipeList([`${query} soup`, `${query} Salad`, `Beef with ${query}`]);
  };
  return (
    <>
      <RecipeSearch handleSearch={handleSearch} />
      <RecipeList recipeList={recipeList} />
    </>
  );
}
