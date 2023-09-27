import { RecipeSearchProvider } from '../contexts/RecipeSearchContext';
import { RecipeSearchWithContext } from '../components/RecipeSearchWithContext';
import { RecipeListWithContext } from '../components/RecipeListWithContext';

export function HomeWithContext() {
  return (
    <RecipeSearchProvider>
      <RecipeSearchWithContext />
      <RecipeListWithContext />
    </RecipeSearchProvider>
  );
}
