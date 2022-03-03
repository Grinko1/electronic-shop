import React from 'react';

const SearchPanel = ({search, setSearch, newest, setsortCat, maxPrice, minPrice}) => {
    return (
        <div className="home-search">
        <div>
          <input className="input-search" value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Type a name" />
          <button type="submit" className="btn-search">
            Search
          </button>
        </div>

        <div>
          <button type="submit" className="btn-search">
            Sort
          </button>
          <select className="select" name="Sort" onChange={(e) => setsortCat(e.target.value)}>
            <option className="option" value={newest}>
            Newest 
            </option>
            <option className="option" value={maxPrice} >
              Max price
            </option>
            <option className="option" value={minPrice}>
            Min price
            </option>
          </select>
        </div>
      </div>
    );
};

export default SearchPanel;