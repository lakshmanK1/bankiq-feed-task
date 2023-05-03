import React,{useState} from 'react'
import './Search.css'

function Search({searchInputChange, searchIp}) {

  return (
    <div className='searchDiv'>
        <input className='searchInput' type='text' value={searchIp} onChange={(e)=>searchInputChange(e.target.value)}/>
    </div>
  )
}

export default Search