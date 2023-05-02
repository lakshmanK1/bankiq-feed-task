import React from 'react'

function Search({setSearchIp}) {
  return (
    <div>
        <input type='text' onChange={(e)=>setSearchIp(e.target.value)}/>
    </div>
  )
}

export default Search