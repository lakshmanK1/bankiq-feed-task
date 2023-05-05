import React from "react";
import "./Search.css";

function Search({ searchInputChange, urlParamsValue }) {
  return (
    <div className="searchDiv">
      <input
        className="searchInput"
        type="text"
        defaultValue={urlParamsValue}
        placeholder="search here.."
        onChange={(e) => searchInputChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
