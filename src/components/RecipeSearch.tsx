import { useState } from 'react';

interface Props {
  handleSearch: (query: string) => void;
}
export function RecipeSearch({ handleSearch }: Props) {
  const [searchInput, setSearchInput] = useState('');
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
