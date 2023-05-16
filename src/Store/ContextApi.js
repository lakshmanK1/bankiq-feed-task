import React, { createContext, useReducer, useEffect } from "react";
import AllProducts from "../JsonData/AllProducts.json";
import {reducer} from "./Reducer";
import { useSearchParams } from "react-router-dom";

export const ContextApiStore = createContext();

const initialState = {
  filteredData: [],
  selectedSortValue: "--Select--",
  searchValue: "",
  page: 1,
};

const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [searchParams, setSearchParams] = useSearchParams();
  const [sortParams, setSortParams] = useSearchParams();

  const urlSearchParamsValue = searchParams.get("searchBy");
  const urlSortParamsValue = sortParams.get("sortBy");

  useEffect(() => {
    const filteredProducts = AllProducts.filter(
      (data) =>
        data.title.toLowerCase().includes(state.searchValue.toLowerCase()) ||
        data.description.toLowerCase().includes(state.searchValue.toLowerCase())
    );
    dispatch({ type: "FilteredProducts", payload: filteredProducts });
  }, [state.searchValue]);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= state.filteredData.length / 10 &&
      selectedPage !== state.page
    ) {
      dispatch({ type: "SetPage", payload: selectedPage });
    }
  };

  const searchInputChange = (val) => {
    const copy = new URLSearchParams(searchParams);
    copy.set("searchBy", val);
    setSearchParams(copy);
    dispatch({ type: "OnChangeOfSearchValue", payload: val });
  };

  const getSortByValue = (value) => {
    const copy = new URLSearchParams(sortParams);
    copy.set("sortBy", value);
    setSortParams(copy);
    dispatch({ type: "OnChangeOfSortByValue", payload: value });
  };

  const getBySort =
    urlSortParamsValue === "ByTitle"
      ? state.filteredData.sort((a, b) => a.title.localeCompare(b.title))
      : urlSortParamsValue === "Low-Price"
      ? state.filteredData.sort((a, b) => a.price - b.price)
      : urlSortParamsValue === "High-Price"
      ? state.filteredData.sort((a, b) => b.price - a.price)
      : state.filteredData;

  const productsDataByParams = urlSearchParamsValue
    ? state.filteredData.filter(
        (data) =>
          data.title
            .toLowerCase()
            .includes(urlSearchParamsValue.toLowerCase()) ||
          data.description
            .toLowerCase()
            .includes(urlSearchParamsValue.toLowerCase())
      )
    : urlSortParamsValue
    ? getBySort
    : state.filteredData;


    const AllContextData = {
        getSortByValue:getSortByValue,
        searchInputChange:searchInputChange,
        selectPageHandler:selectPageHandler,
        page:state.page,
        urlSearchParamsValue:urlSearchParamsValue,
        urlSortParamsValue:urlSortParamsValue,
        productsDataByParams:productsDataByParams
    }


  return <ContextApiStore.Provider value={AllContextData}>{props.children}</ContextApiStore.Provider>;
};

export default ContextProvider;
