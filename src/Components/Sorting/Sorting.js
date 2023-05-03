import React,{useState} from 'react'
import RawData from '../../JsonData/RawData.json'

function Sorting({FilteredData, setFilteredData}) {
    const [sorted, setSorted] = useState({ value: "Sort", data: RawData });

    const handleSort = (e) => {
        setSorted({ value: e.target.value });
      };
    
      function strip(title) {
        return title.replace(/^(a|an|the)\s/i, "");
      }
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
    
        switch (sorted.value) {
          case "Low Price":
            let LP = [...Array(sorted.data)];
            let LP_data = LP.sort((a, b) => (a.price > b.price ? 1 : -1));
            setSorted({ data:LP_data });
            setFilteredData(sorted.data);
            break;
    
          case "High Price":
            let HP = [...Array(sorted.data)];
            let HP_data = HP.sort((a, b) => (b.price > a.price ? 1 : -1));
            setSorted({ data:HP_data });
            setFilteredData(sorted.data);
            break;
    
          case "A-Z":
            let AZ = [...Array(sorted.data)];
            let AZ_data =  AZ.sort((a, b) => (strip(a.title) > strip(b.title) ? 1 : -1));
            setSorted({data:AZ_data});
            setFilteredData(sorted.data);
            break;
    
          case "Z-A":
            let ZA = [...Array(sorted.data)];
            let ZA_data = ZA.sort((a, b) => (strip(b.title) > strip(a.title) ? 1 : -1));
            setSorted({ data: ZA_data});
            setFilteredData(sorted.data);
            break;
    
          default:
            setSorted({data:sorted.data});
            setFilteredData(sorted.data);
            break;
        }
      };

  return (
    <div>
        <form onSubmit={handleFormSubmit}>
        <select value={sorted.value} onChange={handleSort}>
            <option value='Sort'>Sort</option>
            <option value='A-Z'>A-Z</option>
            <option value='Z-A'>Z-A</option>
            <option value='Low Price'>Low Price</option>
            <option value='High Price'>High Price</option>
        </select>
        <button type='submit'>Filter</button>
        </form>
    </div>
  )
}

export default Sorting