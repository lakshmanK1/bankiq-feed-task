import './FeedCmp.css';

function FeedCmp(props) {

const {filteredData, page, selectPageHandler} = props;

  return (
    <div>
      <div className="feeds">
        {filteredData.slice(page * 10 - 10, page * 10).map((prod) => {
          return <span className="feed__single" key={prod.id}>
            <img src={prod.thumbnail} alt={prod.title} /> 
            <div className='details'>
            <span>
              {prod.title}
            </span>
            <span>
              {prod.description}
            </span>
            <span>
              {prod.price}
            </span>
            </div>
          </span>
        })}
      </div>

     <div className="pagination">
        <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>
        {[...Array(filteredData.length / 10)].map((_, i) => {
          return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
        })}
        <span onClick={() => selectPageHandler(page + 1)} className={page < filteredData.length / 10 ? "" : "pagination__disable"}>▶</span>
      </div>
    </div>
  );
}

export default FeedCmp;