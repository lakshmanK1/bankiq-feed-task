import React from "react";
import { BsSearch } from "react-icons/bs";
import "./Search.css";

function Search({ searchInputChange, urlSearchParamsValue }) {
  return (
    <div className="Card">
      <div className="CardInner">
        <label>Search for your favourite food</label>
        <div className="container">
          <div className="Icon">
            <BsSearch />
          </div>
          <div className="InputContainer">
            <input
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
    // <div className="searchDiv">
    //   <input
    //     className="searchInput"
    //     type="text"
    //     defaultValue={urlSearchParamsValue}
    //     placeholder="search here.."
    //     onChange={(e) => searchInputChange(e.target.value)}
    //   />
    // </div>
  );
}

export default Search;
