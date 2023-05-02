import React from 'react'
import './Table.css'

function Table({products, page}) {
  return (
    <div className='tableDiv'>
        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.slice(page*10-10, page*10).map((prod)=>{
                        return(
                            <tr key={prod.id}>
                                <td>{prod.id}</td>
                                <td>{prod.title}</td>
                                <td>{prod.brand}</td>
                                <td>{prod.category}</td>
                                <td>₹ {prod.price}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table