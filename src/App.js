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
    <>
      <h1 className="header">
        <span className="Icon">
          <FcMindMap />
        </span>
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
    </>
  );
}

export default App;
