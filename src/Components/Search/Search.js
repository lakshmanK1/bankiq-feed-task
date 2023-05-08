import React from "react";
import { BsSearch } from "react-icons/bs";
import "./Search.css";

function Search({ searchInputChange, urlSearchParamsValue }) {
  return (
    <div className="Card">
      <div className="CardInner">
        <label htmlFor="search-input">Search for your favourite feed</label>
        <div className="container">
          <div className="Icon">
            <BsSearch />
          </div>
          <div className="InputContainer">
            <input
              id="search-input"
              data-testid='input-field'
              className="searchInput"
              type="text"
              defaultValue={urlSearchParamsValue}
              placeholder="search here.."
              onChange={(e) => searchInputChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>

  );
}

export default Search;
