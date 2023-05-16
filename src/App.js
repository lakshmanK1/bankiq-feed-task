import React, { useContext } from "react";
import Feed from "./Components/Feed/Feed";
import Search from "./Components/Search/Search";
import Sorting from "./Components/Sorting/Sorting";
import "./App.css";
import { FcMindMap } from "react-icons/fc";
import { ContextApiStore } from "./Store/ContextApi";

function App() {

  const {
    getSortByValue,
    searchInputChange,
    selectPageHandler,
    page,
    urlSearchParamsValue,
    urlSortParamsValue,
    productsDataByParams
  } = useContext(ContextApiStore);


  return (
    <div className="app-div">
      <h1 className="header">
          <FcMindMap />
        Available Feeds
      </h1>
      <div className="searchsortDiv">
        <Search
          searchInputChange={searchInputChange}
          urlSearchParamsValue={urlSearchParamsValue}
        />

        <Sorting getSortByValue={getSortByValue} urlSortParamsValue={urlSortParamsValue} />
      </div>
      <Feed
        filteredData={productsDataByParams}
        page={page}
        selectPageHandler={selectPageHandler}
      />
    </div>
  );
}

export default App;
