"use client"
import React, { useState } from 'react'
import { FormEvent } from "react";
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"


//component import
import MyNavbar from "@/components/navbar";
import Card from "@/components/card";
import Footer from "@/components/footer";
import Breadcrumbs from "@/components/breadcrumbs";
import Layout from '@/styles/layout';
import { Session } from 'inspector';

 function CreateProductPage() {
  const { data: session } = useSession()
  const router = useRouter()

   const [ title, setTitle ] = useState("");
   const [ img, setImg ] = useState("");
   const [ details, setDetails ] = useState("");
   const [ price, setPrice ] = useState("");
   const [ gmail, setGmail ] = useState(session?.user?.email);
   const [ imgOwner, setImgOwner ] = useState(session?.user?.image);
   const [ colorInfo, setColorInfo ] = useState({
      color: [],
      
   } as any);

   const [ sizeInfo, setSizeInfo ] = useState({
      size: [],
      
   } as any);

   const [ error, setError ] = useState("");
   const [ message, setMessage] = useState("");

   /////handle session////
  //  const handleSession = (session) => {
  //     if (session) {
  //       setGmail()
  //     }
  //     else {

  //     }
  //  }

   ////////handle color/////
   const handleChangeColor = (e: any) => {
      const { value, checked } = e.target;
      const { color } = colorInfo;
      

      if (checked) {
        setColorInfo({
          color: [...color, value],
          // responseColor: [...color, value],
        })
      }

      else {
        setColorInfo({
          color: color.filter(
            (e:any) => e !== value
          ),
          // responseColor: color.filter(
          //   (e:any) => e !== value
          // )
        });
      }
    };


   //////////handle size ////////////
   const handleChangeSize = (e: any) => {
    const { value, checked } = e.target;
    const { size } = sizeInfo;

    // console.log(`${value} is ${checked}`)
    

    if (checked) {
      setSizeInfo({
        size: [...size, value],
        // responseSize: [...size, value],
      });
    }

    else {
      setSizeInfo({
        size: size.filter(
          (e:any) => e !== value
        ),
        // responseSize: size.filter(
        //   (e:any) => e !== value
        // )
      });
    }
  };

  console.log("color: ",colorInfo)
  console.log("size: ",sizeInfo)
   
  ///////handlesubit button/////////////////
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handle submited")
    console.log(session?.user?.email,session?.user?.image)
    console.log("size: ",sizeInfo.size)
    console.log("color: ",colorInfo.color)
    console.log("title: ",title)
    // const gmail = session?.user?.email;
    // const img_owner = session?.user?.image;
    const sizelen = sizeInfo.size.length
    console.log(img,title,details,price,gmail,">",imgOwner)
    if ( img && title && details && price && gmail && imgOwner && sizeInfo.size.length > 0 && colorInfo.color.length > 0) {
      try {
        
        let response = await fetch("http://localhost:3000/api/addPosts", {
          method: "POST",
          body: JSON.stringify({
            title, 
            img, 
            details, 
            price, 
            gmail, 
            imgOwner, 
            colorInfo, 
            sizeInfo
          }),
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
          }
        })

        response = await response.json();

        setTitle("");
        setImg("");
        setDetails("");
        setPrice("");
        setColorInfo("");
        setSizeInfo("");
        setGmail("");
        setImgOwner("");
        setError("");
        setMessage("Post added successfully.");
        router.push('/mystore')

      } catch(errorMessage: any) {
        console.log("error ms: ", errorMessage);
        setError(errorMessage);
      }
    } else {
        return setError("error: all field are required.");  //, console.log("error to add posts.");
    }
  }
//////////////////

  
      if (session){
        // const gmail = session.user?.email;
        // const img_owner = session.user?.image;
        console.log("error: ",error);
        return(
          <main className='bg-slate-300 dark:bg-black'>
            <Layout>
              <div className='container mx-auto text-black dark:text-slate-200'>
                <form onSubmit={ handleSubmit } id='form'>
                  {error? <div className='alert'>{error}</div> : null}
                  {message? <div className='alert'>{message}</div> : null}
                  <h1 className=' font-bold text-2xl mt-9 text-black dark:text-slate-200'>Create Product</h1>
                  <br />
                  <p className='font-bold text-black dark:text-slate-200'>-image url-</p>
                  <input name='img' onChange={(e) => setImg(e.target.value)} value={img} type="text" placeholder="Image url" className="input input-bordered w-full max-w-xs bg-slate-500  dark:bg-gray-800" />
                  
                  <p className=' font-bold text-black dark:text-slate-200'>-title-</p>
                  <input name='title' onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Title" className="input input-bordered w-full max-w-xs bg-slate-500  dark:bg-gray-800" />

                  <p className=' font-bold text-black dark:text-slate-200'>-detail-</p>
                  <textarea name='details' onChange={(e) => setDetails(e.target.value)} value={details} placeholder={`${colorInfo.responseColor}`} className="textarea textarea-bordered textarea-lg w-full max-w-xs bg-slate-500  dark:bg-gray-800"></textarea>
                  
                  <p className=' font-bold text-black dark:text-slate-200'>-price-</p>
                  <input name='price' onChange={(e) => setPrice(e.target.value)} value={price} type="number" placeholder="Price" className="input input-bordered w-full max-w-xs bg-slate-500  dark:bg-gray-800" />

                  <p className=' font-bold mt-7 text-black dark:text-slate-200'>-color-</p>
                  <div className='flex text-black dark:text-slate-200'>
                    <input type="checkbox"  className="checkbox mr-2 border-black dark:border-white" value={"black"} onChange={ handleChangeColor }/><p className='mr-6 text-black dark:text-slate-200'>black</p>
                    <input type="checkbox"  className="checkbox mr-2 border-black dark:border-white" value={"white"} onChange={ handleChangeColor }/><p className='mr-6 text-black dark:text-slate-200'>white</p>
                    <input type="checkbox"  className="checkbox mr-2 border-black dark:border-white" value={"red"} onChange={ handleChangeColor }/><p className='mr-6 text-black dark:text-slate-200'>red</p>
                    <input type="checkbox"  className="checkbox mr-2 border-black dark:border-white" value={"blue"} onChange={ handleChangeColor }/><p className='mr-6 text-black dark:text-slate-200'>blue</p>
                    <input type="checkbox"  className="checkbox mr-2 border-black dark:border-white" value={"green"} onChange={ handleChangeColor }/><p className='mr-6 text-black dark:text-slate-200'>green</p>
                    <input type="checkbox"  className="checkbox mr-2 border-black dark:border-white" value={"pink"} onChange={ handleChangeColor }/><p className='mr-6 text-black dark:text-slate-200'>pink</p>
                  </div>
                  <p className=' font-bold mt-7 text-black dark:text-slate-200'>-size-</p>
                  <div className='flex text-black dark:text-slate-200'>
                    <input type="checkbox"  className="checkbox mr-2 border-black dark:border-white" value={"S"} onChange={ handleChangeSize }/><p className='mr-6 text-black dark:text-slate-200'>S</p>
                    <input type="checkbox"  className="checkbox mr-2 border-black dark:border-white" value={"M"} onChange={ handleChangeSize }/><p className='mr-6 text-black dark:text-slate-200'>M</p>
                    <input type="checkbox"  className="checkbox mr-2 border-black dark:border-white" value={"L"} onChange={ handleChangeSize }/><p className='mr-6 text-black dark:text-slate-200'>L</p>
                    <input type="checkbox"  className="checkbox mr-2 border-black dark:border-white" value={"XL"} onChange={ handleChangeSize }/><p className='mr-6 text-black dark:text-slate-200'>XL</p>
                    <input type="checkbox"  className="checkbox mr-2 border-black dark:border-white" value={"2XL"} onChange={ handleChangeSize }/><p className='mr-6 text-black dark:text-slate-200'>2XL</p>
                  </div>
                  

                  <div className='flex justify-center mt-28'>
                    <Link href='/mystore/page'>
                      <button className="btn btn-outline w-28 mx-4 text-black dark:text-slate-200">Cencel</button>
                    </Link>
                    <button type='submit' className="btn btn-outline w-28 text-black dark:text-slate-200" onClick={(e) => setGmail(session.user?.email)} >Create</button>
                  </div>

                </form>
                
                

              </div>
            </Layout>
          </main>
        )
      }
        return(
          <Layout>
            <div className='flex justify-center mt-28'>
              <button onClick={() => signIn()} className='btn text-black dark:text-slate-200'>Login with Google</button>
            </div>
          </Layout>
        )
}

export default CreateProductPage
