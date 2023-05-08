import './FeedCmp.css';
import Table from '../Table/Table';

function FeedCmp(props) {
const {filteredData, page, selectPageHandler} = props;

  return (
    <div data-testid="feed-component">
      {filteredData.length > 0 && <div className="feeds">
        {filteredData.slice(page * 10 - 10, page * 10).map((prod) => {
          return <span className="feed__single" key={prod.id} data-testid='single_card'>
            <img src={prod.thumbnail} alt={prod.title} /> 
            <div className='details'>
            <span className='title'>
              {prod.title}
            </span>
            <span className='description'>
              {prod.description}
            </span>
            <span className='price'>
            ₹ {prod.price}
            </span>
            </div>
          </span>
        })}
      </div>}

      <Table products={filteredData} page={page}/>
      
     {filteredData.length > 0 && <div className="pagination">
        <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>

        {[...Array(Math.floor(filteredData.length / 10))].map((_, i) => {
          return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
        })}

        <span onClick={() => selectPageHandler(page + 1)} className={page < filteredData.length / 10 ? "" : "pagination__disable"}>▶</span>
      </div>}
    </div>
  );
}

export default FeedCmp;