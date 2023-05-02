import './FeedCmp.css';

function FeedCmp(props) {

const {products, page, selectPageHandler} = props;

  return (
    <div>
      {products.length > 0 && <div className="feeds">
        {products.slice(page * 10 - 10, page * 10).map((prod) => {
          return <span className="feed__single" key={prod.id}>
            <img src={prod.thumbnail} alt={prod.title} /> {/* alt is imp */}
            <div className='details'>
            <span>
              {prod.title}
            </span>
            <span>
              {prod.description}
            </span>
            </div>
          </span>
        })}
      </div>}

      {products.length > 0 && <div className="pagination">
        <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>

        {[...Array(products.length / 10)].map((_, i) => {
          return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
        })}

        <span onClick={() => selectPageHandler(page + 1)} className={page < products.length / 10 ? "" : "pagination__disable"}>▶</span>
      </div>}
    </div>
  );
}

export default FeedCmp;