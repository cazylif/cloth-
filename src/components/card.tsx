import React from 'react'
import Link from 'next/link'

function card() {
    return (
        <div className="card w-auto  bg-slate-700 w-96 shadow-xl ">
            <figure>
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <div className='relative'>
                    <p className='sm:text-sm md:text-sm xl:text-base '>2500฿</p>
                </div>
                
                <div className="card-actions justify-end">
                    <button className='btn sm:w-10 md:w-14 xl:w-16 btn-neutral'>Add cart</button>
                    <Link href='/shop/page'>
                        <button className="btn sm:w-10 md:w-20 xl:w-28 btn-neutral">Go</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default card