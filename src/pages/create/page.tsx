"use client"

import React, { useState } from 'react'
import { FormEvent } from "react";
import Link from 'next/link'
import { useRouter } from 'next/navigation'

//component import
import MyNavbar from "@/components/navbar";
import Card from "@/components/card";
import Footer from "@/components/footer";
import Breadcrumbs from "@/components/breadcrumbs";
import Layout from '@/styles/layout';

 function CreateProductPage() {
  return (
    
    <Layout>

      <div className='container mx-auto'>
        <form >
          <h1 className='text-slate-400 font-bold text-2xl mt-9'>Create Product</h1>
          <br />
          <p className='text-slate-400 font-bold'>-image url-</p>
          <input  type="text" placeholder="Image url" className="input input-bordered w-full max-w-xs" />
          
          <p className='text-slate-400 font-bold'>-tiltl-</p>
          <input  type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" />

          <p className='text-slate-400 font-bold'>-detail-</p>
          <textarea  placeholder="Detail" className="textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea>
          
          <p className='text-slate-400 font-bold'>-price-</p>
          <input  type="text" placeholder="Price" className="input input-bordered w-full max-w-xs" />
          

        </form>
        <p className='text-slate-400 font-bold mt-7'>-color-</p>
        <div className='flex'>
          <input type="checkbox"  className="checkbox mr-2" /><p className='mr-6'>black</p>
          <input type="checkbox"  className="checkbox mr-2" /><p className='mr-6'>white</p>
          <input type="checkbox"  className="checkbox mr-2" /><p className='mr-6'>red</p>
          <input type="checkbox"  className="checkbox mr-2" /><p className='mr-6'>blue</p>
          <input type="checkbox"  className="checkbox mr-2" /><p className='mr-6'>green</p>
          <input type="checkbox"  className="checkbox mr-2" /><p className='mr-6'>pink</p>
        </div>
        <p className='text-slate-400 font-bold mt-7'>-size-</p>
        <div className='flex'>
          <input type="checkbox"  className="checkbox mr-2" /><p className='mr-6'>S</p>
          <input type="checkbox"  className="checkbox mr-2" /><p className='mr-6'>M</p>
          <input type="checkbox"  className="checkbox mr-2" /><p className='mr-6'>L</p>
          <input type="checkbox"  className="checkbox mr-2" /><p className='mr-6'>XL</p>
          <input type="checkbox"  className="checkbox mr-2" /><p className='mr-6'>2XL</p>
        </div>
        <div className='flex justify-center mt-28'>
          <Link href='/mystore/page'>
            <button className="btn btn-outline w-28 mx-4">Cencel</button>
          </Link>
          <button type='submit' className="btn btn-outline w-28">Create</button>
   
          
        </div>
      </div>

  
    </Layout>
  )
}

export default CreateProductPage
