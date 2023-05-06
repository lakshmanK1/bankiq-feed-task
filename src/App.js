import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Feed from "./Components/Feed/Feed";
import Table from "./Components/Table/Table";
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
  const urlSearchParamsValue = searchParams.get("searchBy");

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
    const copy = new URLSearchParams(searchParams);
    copy.set("searchBy", val);
    setSearchParams(copy);
  };

  const productsDataByParams = urlSearchParamsValue
    ? filteredData.filter((data) =>
        data.title.toLowerCase().includes(urlSearchParamsValue.toLowerCase())
      )
    : filteredData;

  // For Sorting Component

  const getSortByValue = (value) => {
    setSortValue(value);
    const copy = new URLSearchParams(searchParams);
    copy.set("sortBy", value);
    setSearchParams(copy);
  };

  const handleSortingAction = () => {
    switch (sortValue) {
      case "ByTitle":
        let orignalProductsData = [...filteredData];
        let sortedByTitle = orignalProductsData.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        return sortedByTitle;
        break;

      case "Low-Price":
        let orignalDataForLowPrice = [...filteredData];
        const sortOnLowPrice = (a, b) => {
          return a.price - b.price;
        };

        let LP_data = orignalDataForLowPrice.sort(sortOnLowPrice);
        setFilteredData(LP_data);
        break;

      case "High-Price":
        let orignalDataForHighPrice = [...filteredData];
        const sortOnHighPrice = (a, b) => {
          return b.price - a.price;
        };

        let HP_data = orignalDataForHighPrice.sort(sortOnHighPrice);
        setFilteredData(HP_data);
        break;

      default:
        setSortValue("Sort");
        return filteredData;
        break;
    }
  };

  return (
    <div>
      <h1 className="header"><span className="Icon"><FcMindMap/></span>Available Feeds</h1>
      <div className="searchsortDiv">
        <Search
          searchInputChange={searchInputChange}
          searchIp={searchIp}
          urlSearchParamsValue={urlSearchParamsValue}
        />

        <Sorting
          getSortByValue={getSortByValue}
          handleSortingAction={handleSortingAction}
          sortValue={sortValue}
        />

      </div>
      <Feed
        filteredData={productsDataByParams}
        page={page}
        selectPageHandler={selectPageHandler}
      />
      <Table products={productsDataByParams} page={page} />
    </div>
  );
}

export default App;
