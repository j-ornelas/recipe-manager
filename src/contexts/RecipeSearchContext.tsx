import { createContext, useContext, useState } from 'react';

interface RecipeSearchContextProps {
  recipeList: string[];
  handleSearch: (query: string) => void;
}
const RecipeSearch = createContext<RecipeSearchContextProps | null>(null);

export function useRecipeSearch() {
  const contextValue = useContext(RecipeSearch);

  if (!contextValue) {
    throw new Error(
      'useRecipeSearch must be used from within a RecipeSearchProvider',
    );
  }

  return contextValue;
}

export function RecipeSearchProvider(props: any) {
  const [recipeList, setRecipeList] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    setRecipeList([`${query} soup`, `${query} Salad`, `Beef with ${query}`]);
  };

  const value = { recipeList, handleSearch };
  return <RecipeSearch.Provider value={value} {...props} />;
}
