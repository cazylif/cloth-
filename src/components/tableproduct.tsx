"use client"
import React, { useState,useEffect } from 'react'


 

function tableproduct() {
  

    return (
        <div className="overflow-x-auto">
            <table className="table ">
                <thead >
                    <tr >
                        <th></th>
                        <td>Photo</td>
                        <td>Title</td>
                        <td>Detais</td>
                        <td>Price</td>
                        <td>Color</td>
                        <td>Size</td>
                        <td>Edit/Delete</td>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td><img className='size-16' src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="" /></td>
                        <td>Shoe</td>
                        <td>brand news</td>
                        <td>2500</td>
                        <td>red/blue</td>
                        <td>S/M/L/XL</td>
                        <td> <button className='btn'>Edit</button> <button className='btn'>Delete</button> </td>
                        <th>1</th>
                    </tr>
                </tbody>

                <tfoot>
                    <tr>
                        <th></th>
                        <td>Photo</td>
                        <td>Title</td>
                        <td>Detail</td>
                        <td>Price</td>
                        <td>Color</td>
                        <td>Size</td>
                        <td>Edit/Delete</td>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

// export default tableproduct