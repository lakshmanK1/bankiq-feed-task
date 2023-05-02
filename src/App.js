import React,{useState, useEffect} from "react";
import Feed from "./Components/Feed/Feed";
import Search from "./Components/Search/Search";
import RawData from './JsonData/RawData.json'

function App() {
  // const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchIp, setSearchIp] = useState('');
  const [page, setPage] = useState(1);

  // const fetchProducts = async () => {
  //   const res = await fetch(`https://dummyjson.com/products?limit=100`)
  //   const data = await res.json()

  //   console.log(data);

  //   if (data && data.products) {
  //     setProducts(data.products)
  //   }
  // }

  // useEffect(() => {
  //   fetchProducts()
  // }, []);

  useEffect(()=>{
    const data = RawData.filter((data)=>data.title.toLowerCase().includes(searchIp.toLowerCase()));
    setFilteredData(data);
  },[searchIp]);

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= RawData.length / 10 && selectedPage !== page) {
      setPage(selectedPage)
    }
  }


  return (
    <div>
      <div>
        <Search setSearchIp={setSearchIp}/>
      </div>
      <Feed products={filteredData} page={page} selectPageHandler={selectPageHandler}/>
    </div>
  );
}

export default App;
