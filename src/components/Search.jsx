import { debounce } from '../helpers/searchHelpers.js';

function Search({ search, setSearch, setItems, items, spotifyApi }) {
  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
    if (value === '') {
      debouncedSearch.cancel();
      setItems([]);
    } else {
      debouncedSearch(value);
    }
  };

  const debouncedSearch = debounce(async (searchValue) => {
    try {
      if (spotifyApi) {
        const data = await spotifyApi.searchTracks(searchValue);
        let { items } = data?.body?.tracks;
        console.log(items);
        setItems(items);
      }
    } catch (err) {
      console.error(err);
    }
  }, 500);

  return (
    <div className="searchContainer">
      <input
        placeholder="Search for your favourite jams"
        className="searchBar"
        spellCheck={false}
        value={search}
        autoFocus
        onChange={(e) => handleSearch(e)}
      />
      <kbd className="!ml-4">cmd</kbd>
      <kbd>/</kbd>
    </div>
  );
}

export default Search;
