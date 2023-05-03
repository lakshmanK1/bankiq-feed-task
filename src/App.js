import React, { useState, useEffect } from "react";
import Feed from "./Components/Feed/Feed";
import Table from "./Components/Table/Table";
import Search from "./Components/Search/Search";
import RawData from "./JsonData/RawData.json";
import Sorting from "./Components/Sorting/Sorting";

function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [searchIp, setSearchIp] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const data =
      RawData.filter((data) =>
        data.title.toLowerCase().includes(searchIp.toLowerCase())
      ) ||
      RawData.filter((data) =>
        data.description.toLowerCase().includes(searchIp.toLowerCase())
      );
    setFilteredData(data);
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
  };


  return (
    <div>
      <div>
        <Search searchInputChange={searchInputChange} searchIp={searchIp} />
        <Sorting filteredData={filteredData} setFilteredData={setFilteredData} />
      </div>
      <Feed
        filteredData={filteredData}
        RawData={RawData}
        page={page}
        selectPageHandler={selectPageHandler}
      />
      <Table products={filteredData} page={page} />
    </div>
  );
}

export default App;
