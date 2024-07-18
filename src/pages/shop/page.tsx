import React from 'react'
import Image from 'next/image'

//component import
import MyNavbar from "@/components/navbar";
import card from '@/components/card';
import Footer from "@/components/footer";
import Breadcrumbs from "@/components/breadcrumbs";

//import
import Component from '@/components/login-btn';
import Layout from '@/styles/layout';

function page() {
    return (
        <main className=''>
            <Layout>

                <div className='flex flex-wrap justify-center mt-20  '>
                    <div className="carousel carousel-vertical rounded-box h-96">
                        <div className="carousel-item h-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
                        </div>
                    </div>
                    
                    <div className='ml-5 w-1/2'>
                        <h1 className='font-bold text-3xl'>shoes</h1><h2>Price: 2500฿</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa a eligendi eos mollitia officia nostrum. Provident totam corrupti eos repellendus!</p>
                        
                        <div className='mt-10'>
                            <p>-Chose color-</p>
                            <select className="select select-primary w-full max-w-xs">
                                <option disabled selected>Chose Color</option>
                                <option>Red</option>
                                <option>Black</option>
                                <option>Brown</option>
                                <option>White</option>
                            </select>
                            <p>-Chose size-</p>
                            <select className="select select-primary w-full max-w-xs">
                                <option disabled selected>Chose size</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                        </div>
                        <div className='float-start'>
                            
                            <button className="btn btn-outline mt-10 mr-4">Add to card</button>
                            <button className="btn btn-outline ">Buy now</button>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <p className=''>scroll down<kbd className="kbd kbd-xs">▼</kbd>and up<kbd className="kbd kbd-xs">▲</kbd></p>
                </div>
            </Layout>
            
        </main>

    )
}

export default page