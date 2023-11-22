import './Search.css';

function Search( { searchValue, setSearchValue }) {

    const clearSearch = () => {
        setSearchValue('')
    }

    return(
    <div className="fancy-search">
        <label htmlFor="search">
        <input 
        type="text"
        id="search"
        name="search"
        placeholder="Search here ..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        />
        </label>
        <button onClick={clearSearch}>Clear Search</button>
    </div>
    )
}

export default Search;