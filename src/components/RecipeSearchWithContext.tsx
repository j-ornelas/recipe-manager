import { useState } from 'react';
import { useRecipeSearch } from '../contexts/RecipeSearchContext';

export function RecipeSearchWithContext() {
  const [searchInput, setSearchInput] = useState('');
  const { handleSearch } = useRecipeSearch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch(searchInput);
      }}
    >
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
}
