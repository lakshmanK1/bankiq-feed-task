export const reducer = (state, action) => {
    if(action.type === "FilteredProducts"){
        return {...state, filteredData : action.payload};
    }

    if(action.type === "SetPage"){
        return {...state, page:action.payload};
    }

    if(action.type === "OnChangeOfSearchValue"){
        return {...state, searchValue:action.payload, page:1}
    }

    if(action.type === 'OnChangeOfSortByValue'){
        return {...state, selectedSortValue:action.payload}
    }
} 