import React from 'react'
import './Table.css'

function Table({products, page}) {
  return (
    <div className='tableDiv'>
        <table className='table' data-testid="table-comp">
            <thead>
                <tr>
                    <th>S.No</th>
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
                                <td data-label='S.No'>{prod.id}</td>
                                <td data-label='Title'>{prod.title}</td>
                                <td data-label='Brand'>{prod.brand}</td>
                                <td data-label='Category'>{prod.category}</td>
                                <td data-label='Price'>₹ {prod.price}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default React.memo(Table)