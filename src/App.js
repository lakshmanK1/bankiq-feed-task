import React, { useState, useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import Feed from "./Components/Feed/Feed";
import Table from "./Components/Table/Table";
import Search from "./Components/Search/Search";
import AllProducts from './JsonData/AllProducts.json'
import Sorting from "./Components/Sorting/Sorting";
import'./App.css'

function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [searchIp, setSearchIp] = useState("");
  const [page, setPage] = useState(1);

  // useSearchParams
  const [searchParams, setSearchParams] = useSearchParams();
  const urlParamsValue = searchParams.get('searchBy');


  useEffect(() => {
    const filteredProducts =
      AllProducts.filter((data) =>
        data.title.toLowerCase().includes(searchIp.toLowerCase()) ||
        data.description.toLowerCase().includes(searchIp.toLowerCase())
      ) 
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
    setSearchParams({searchBy:val});
  };

  const sharableData = urlParamsValue ? (filteredData.filter(data=>data.title.toLowerCase().includes(urlParamsValue.toLowerCase()))) : filteredData;

  return (
    <div>
      <h1 className="header">Available Feeds</h1>
      <div className="searchsortDiv">
        <Search searchInputChange={searchInputChange} searchIp={searchIp} urlParamsValue={urlParamsValue}/>
        <Sorting filteredData={sharableData} setFilteredData={setFilteredData} setPage={setPage}/>
      </div>
      <Feed
        filteredData={sharableData}
        page={page}
        selectPageHandler={selectPageHandler}
      />
      <Table products={sharableData} page={page} />
    </div>
  );
}

export default App;
