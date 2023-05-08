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
  const [afterSort, setAfterSort] = useState([]);
  const [sortValue, setSortValue] = useState("Sort");
  const [searchIp, setSearchIp] = useState("");
  const [page, setPage] = useState(1); 

  // useSearchParams
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortParams, setSortParams] = useSearchParams();
  const urlSearchParamsValue = searchParams.get("searchBy");
  const urlSortParamsValue = sortParams.get("sortBy");
  console.log(urlSortParamsValue)

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

  const handleSortingAction = () => {
    switch (sortValue) {
      case "ByTitle":
        const sortOnTitle = (a, b) => {
        return a.title.localeCompare(b.title)
        }
        let ByTitle = filteredData.sort(sortOnTitle);
        setAfterSort(ByTitle);
        break;

      case "Low-Price":
        const sortOnLowPrice = (a, b) => {
          return a.price - b.price;
        };
        let ByLowPrice =  filteredData.sort(sortOnLowPrice);
        setAfterSort(ByLowPrice);
        break;

      case "High-Price":
        const sortOnHighPrice = (a, b) => {
          return b.price - a.price;
        };
        let ByHighPrice = filteredData.sort(sortOnHighPrice);
        setAfterSort(ByHighPrice);
        break;

      default:
        return filteredData;
        break;
    }
  };

  const productsDataByParams = urlSearchParamsValue
  ? filteredData.filter((data) =>
      data.title.toLowerCase().includes(urlSearchParamsValue.toLowerCase()) ||
      data.description.toLowerCase().includes(urlSearchParamsValue.toLowerCase())
    )
  : urlSortParamsValue ? filteredData : filteredData;

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
          handleSortingAction={handleSortingAction}
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
