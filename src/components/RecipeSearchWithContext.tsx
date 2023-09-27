import { useState } from 'react';
import { useRecipeSearch } from '../contexts/RecipeSearchContext';

export function RecipeSearchWithContext() {
  const [searchInput, setSearchInput] = useState('');
  const { handleSearch } = useRecipeSearch();

  return (
    <div>
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      ></input>
      <button onClick={() => handleSearch(searchInput)}>Search</button>
    </div>
  );
}
