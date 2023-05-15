import React from "react";
import "./Sorting.css";

function Sorting(props) {
  const {getSortByValue, urlSortParamsValue} = props;

  return (
    <div>
      <select
        data-testid="sort-component"
        className="selectEle"
        defaultValue={urlSortParamsValue}
        onChange={(e)=>getSortByValue(e.target.value)}
      >
        <option className="option" value="--Slect--">
          --Select--
        </option>
        <option className="option" value="ByTitle">
          ByTitle
        </option>
        <option className="option" value="Low-Price">
          Low-Price
        </option>
        <option className="option" value="High-Price">
          High-Price
        </option>
      </select>
    </div>
  );
}

export default React.memo(Sorting);
