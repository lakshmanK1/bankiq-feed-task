import React, { useState, useEffect } from "react";
import "./Sorting.css";

function Sorting({ filteredData, setFilteredData, setPage }) {
  const [sortValue, setSortValue] = useState("Sort");
  const [sortedProducts, setSortedProducts] = useState(filteredData);
  console.log(filteredData);

  const handleSort = (e) => {
    console.log(e.target.value);
    setSortValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPage(1);

    switch (sortValue) {
      case "A-Z":
        let orignalDataForAtoZ = [...filteredData];
        let AtoZ_Products = orignalDataForAtoZ.sort((a, b) => 
           a.title.localeCompare(b.title)
        );
        console.log(AtoZ_Products);
        setFilteredData(AtoZ_Products);
        break;

      case "Z-A":
        let orignalDataForZtoA = [...filteredData];
        let ZtoA_data = orignalDataForZtoA.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        setFilteredData(ZtoA_data);
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
        break;
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <select className="selectEle" value={sortValue} onChange={handleSort}>
          <option className="option" value="Sort">
            Sort
          </option>
          <option className="option" value="A-Z">
            A-Z
          </option>
          <option className="option" value="Z-A">
            Z-A
          </option>
          <option className="option" value="Low-Price">
            Low-Price
          </option>
          <option className="option" value="High-Price">
            High-Price
          </option>
        </select>
        <button className="sortingBtn" type="submit">
          Filter
        </button>
      </form>
    </div>
  );
}

export default Sorting;
