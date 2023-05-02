import React,{useEffect, useState} from 'react'
import './Feed.css'

function Feed() {
    const [feedData, setFeedData] = useState([]);

    const fetchApiFeed = () => {
        fetch('https://dummyjson.com/products').then((res)=>res.json()).then((data)=>{
            setFeedData(data.products);
        })
    }
    
    useEffect(()=>{
        fetchApiFeed();
    },[]); 

  return (
    <div>
        {
            feedData.length > 0 && 
            <div className='feeds'>
                {
                    feedData.map((data)=>{
                        return(
                            <span className='feed__single' key={data.id}>
                                <img src={data.thumbnail} alt='image'/>
                                <span>Title: {data.title}</span>
                                <span>Descriptions: {data.description}</span>
                                <span>LastUpload: {data.dateLastEdited}</span>
                            </span>
                        );
                    })
                }
            </div>
        }
    </div>
  )
}

export default Feed