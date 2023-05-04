import React, { useState, useEffect} from "react";
import Feed from "./Components/Feed/Feed";
import Table from "./Components/Table/Table";
import Search from "./Components/Search/Search";
import RawData from "./JsonData/RawData.json";
import Sorting from "./Components/Sorting/Sorting";
import'./App.css'

function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [searchIp, setSearchIp] = useState("");
  const [page, setPage] = useState(1);


  // const [sortValue, setSortValue] = useState("Sort");
  // const [sortedProducts, setSortedProducts] = useState([]);


  useEffect(() => {
    const filteredProducts =
      RawData.filter((data) =>
        data.title.toLowerCase().includes(searchIp.toLowerCase()) ||
        data.description.toLowerCase().includes(searchIp.toLowerCase())
      ) 
    setFilteredData(filteredProducts);
    console.log(filteredData);
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
  };


  // const handleSort = (e) => {
  //   console.log(e.target.value);
  //   setSortValue(e.target.value);
  // };


  // const handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   switch (sortValue) {
  //     case "A-Z":
  //       let AtoZ_Products = sortedProducts.sort((a, b) =>
  //         a.title.localeCompare(b.title)
  //       );
  //       setFilteredData(AtoZ_Products);
  //       break;

  //     case "Z-A":
  //       let ZtoA_data = sortedProducts.sort((a, b) =>
  //         b.title.localeCompare(a.title)
  //       );
  //       setFilteredData(ZtoA_data);
  //       break;

  //     case "Low-Price":
  //       const sortOnLowPrice = (a, b) => {
  //         return a.price - b.price;
  //       };

  //       let LP_data = FilteredData.sort(sortOnLowPrice);
  //       setFilteredData(LP_data);
  //       break;

  //     case "High-Price":
  //       const sortOnHighPrice = (a, b) => {
  //         return b.price - a.price;
  //       };

  //       let HP_data = FilteredData.sort(sortOnHighPrice);
  //       setFilteredData(HP_data);
  //       break;

  //     default:
  //       setSortValue("Sort");
  //       break;
  //   }
  // };


  console.log(filteredData);
  return (
    <div>
      <h1 className="header">Available Feeds</h1>
      <div className="searchsortDiv">
        <Search searchInputChange={searchInputChange} searchIp={searchIp} />
        <Sorting filteredData={filteredData} setFilteredData={setFilteredData} setPage={setPage}/>
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
