const SearchItem = ({ search, setSearch }) => {
  return (
    <form className='search-form' onSubmit={e => e.preventDefault()}>
      <label htmlFor='search-item' className='sr-only'>
        Search Item on List
      </label>
      <input
        id='search-item'
        name='search-item'
        type='text'
        placeholder='Search Item'
        className='search-item'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </form>
  );
};
export default SearchItem;
