import { useState } from 'react';

interface Props {
  handleSearch: (query: string) => void;
}
export function RecipeSearch({ handleSearch }: Props) {
  const [searchInput, setSearchInput] = useState('');
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
