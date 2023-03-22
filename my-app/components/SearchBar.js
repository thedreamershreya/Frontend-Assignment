import { useState } from 'react';
import { useRouter } from 'next/router';
import _debounce from 'lodash/debounce';


function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = _debounce((value) => {
    router.push({
      pathname: '/search',
      query: { q: value },
    });
  }, 500);

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    handleSearch(value);
  };

  return (
    <input type="text" value={query} onChange={handleChange} />
  );
}

export default SearchBar;
