import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Feed from "./Components/Feed/Feed";
import Search from "./Components/Search/Search";
import AllProducts from "./JsonData/AllProducts.json";
import Sorting from "./Components/Sorting/Sorting";
import "./App.css";
import {FcMindMap} from 'react-icons/fc'

function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [sortValue, setSortValue] = useState("Sort");
  const [searchIp, setSearchIp] = useState("");
  const [page, setPage] = useState(1); 

  // useSearchParams
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortParams, setSortParams] = useSearchParams();
  const urlSearchParamsValue = searchParams.get("searchBy");
  const urlSortParamsValue = sortParams.get("sortBy");

  useEffect(() => {
    const filteredProducts = AllProducts.filter(
      (data) =>
        data.title.toLowerCase().includes(searchIp.toLowerCase()) ||
        data.description.toLowerCase().includes(searchIp.toLowerCase())
    );
    setFilteredData(filteredProducts);
  }, [searchIp]);


  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= filteredData.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  const searchInputChange = (val) => {
    setSearchIp(val);
    setPage(1);
    setSearchParams({'searchBy':val});
  };

  //For Sorting Component
  const getSortByValue = (value) => {
    setSortValue(value);
    const copy = new URLSearchParams(sortParams);
    copy.set("sortBy", value);
    setSearchParams(copy);
  };


  const getBySort = urlSortParamsValue === 'ByTitle' ? filteredData.sort((a, b) => a.title.localeCompare(b.title)) :
  urlSortParamsValue === 'Low-Price' ? filteredData.sort((a, b) => a.price - b.price) :
  urlSortParamsValue === 'High-Price' ? filteredData.sort((a, b) => b.price - a.price) : filteredData
  
  const productsDataByParams = urlSearchParamsValue
  ? filteredData.filter((data) =>
      data.title.toLowerCase().includes(urlSearchParamsValue.toLowerCase()) ||
      data.description.toLowerCase().includes(urlSearchParamsValue.toLowerCase())
    )
  : urlSortParamsValue ? getBySort  : filteredData;

  return (
    <>
      <h1 className="header"><span className="Icon"><FcMindMap/></span>Available Feeds</h1>
      <div className="searchsortDiv">
        <Search
          searchInputChange={searchInputChange}
          urlSearchParamsValue={urlSearchParamsValue}
        />

        <Sorting
          getSortByValue={getSortByValue}
          sortParams={sortParams}
          setSortParams={setSortParams}
          sortValue={sortValue}
        />

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
