import React from 'react'
import './Search.css'

function Search({setSearchIp}) {
  return (
    <div className='searchDiv'>
        <input className='searchInput' type='text' onChange={(e)=>setSearchIp(e.target.value)}/>
    </div>
  )
}

export default Search