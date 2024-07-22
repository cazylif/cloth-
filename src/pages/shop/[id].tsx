import React from 'react'
import type { GetServerSideProps, GetStaticPaths, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import Layout from '@/styles/layout'
import { useState } from 'react'
import { useSession, signIn } from 'next-auth/react';
import { FormEvent } from "react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { addRequestMeta } from 'next/dist/server/request-meta';
import { color } from 'framer-motion';
import { info } from 'console';
import Image from 'next/image';

type PageParams = {
    id: String;
  }
  
  type ContentPageProps = {
    post: Post;
  }
  
  type Post = {
    _id: String;
    gmail: String;
    imgOwner: String; 
    img: String;
    title: String;
    details: String;
    price: String;
    colorInfo: colorInfo;
    sizeInfo: sizeInfo;
  }
 type colorInfo = {
     color: String;
 }

 type sizeInfo = {
    size: String;
 }
  /////////////// 
  type ResponseFromServer = {
    _id: String;
    gmail: String;
    imgOwner: String; 
    img: String;
    title: String;
    details: String;
    price: String;
    colorInfo: String;
    sizeInfo: String;
    color: String;
    size: String;
    
  }
  
  export async function getStaticProps({
    params
  }: GetStaticPropsContext<PageParams>): Promise<GetStaticPropsResult<ContentPageProps>>  {
    try {
        let response = await fetch("http://localhost:3000/api/getPost?id=" + params?.id )
  
        let responseFromServer: ResponseFromServer = await response.json()
        console.log("dskfjdlfskjfdklsfjlkjsfdlkfjdsfldkjfdkjlf")
        return {
          props: {
            post: {
              _id: responseFromServer._id,
              gmail: responseFromServer.gmail,
              imgOwner: responseFromServer.imgOwner,
              img: responseFromServer.img,
              title: responseFromServer.title,
              details: responseFromServer.details,
              price: responseFromServer.price,
              colorInfo: responseFromServer.colorInfo,
              sizeInfo: responseFromServer.sizeInfo,

            //   colorInfo: {
            //     color: responseFromServer.color
            //   },
            //   sizeInfo: {
            //     size: responseFromServer.size
            //   }
            }
          }
        }
  
    } catch(e) {
      console.log("error", e);
      return {
        props: {
          post: {
            _id: "",
            gmail: "",
            imgOwner: "", 
            img: "",
            title: "",
            details: "",
            price: "",
            colorInfo: {color: ""},
            sizeInfo: {size: ""},
          }
        }
      }
  
    }
  }
  
  
  export async function getStaticPaths() {
    let posts = await fetch("http://localhost:3000/api/getPosts");
  
    let postFromServer: [Post] =await posts.json();
  
    return {
      paths: postFromServer.map((post) => {
        return {
          params:  {
            id: post._id
          }
        }
      }),
      fallback: false
    }
    
  }

  function page({
    post: {_id, gmail, imgOwner, img, title, details, price, colorInfo, sizeInfo,}
  }: ContentPageProps) {
    console.log("conlorInfo: ", colorInfo.color)
    return (
        <main className=''>
            <Layout>

                <div className='flex flex-wrap justify-center mt-20  '>
                    <div className="carousel carousel-vertical rounded-box h-96">
                        {/* {img.map((img: any) => {
                            return (
                                <div key={img._id} className="carousel-item h-full">
                                    <Image
                                        src={`{${img}}`}
                                        height={200}
                                        width={200}
                                        alt='productimg'
                                        key={img._id}
                                    />
                                </div>
                            )
                        })} */}
                        
                            <Image
                                src={`${img}`}
                                height={400}
                                width={400}
                                alt='productimg'
                                
                            />
                        
                        
                      
                    </div>
                    
                    <div className='ml-5 w-1/2'>
                        <h1 className='font-bold text-3xl'>{title}</h1><h2>Price: {price} ฿</h2>
                        <p>{details}</p>
                        <div className='flex mt-12'>
                          owner: 
                          <Image
                            src={`${imgOwner}`}
                            height={30}
                            width={30}
                            alt='imgOwner'
                          />
                          <p>{gmail}</p>
                        </div>
                        <div className=''>
                            <p>-Chose color-</p>
                            <select className="select select-primary w-full max-w-xs">
                                <option disabled selected>Chose color</option>
                                {colorInfo.color.map((color: any) => {
                                    return (

                                        <option key={color._id}>{color}</option>
                                        
                                    )
                                })}
                                
                            </select>
                            <p>-Chose size-</p>
                            <select className="select select-primary w-full max-w-xs">
                                <option disabled selected>Chose size</option>
                                {sizeInfo.size.map((size: any) => {
                                    return (

                                        <option key={size._id}>{size}</option>
                                        
                                    )
                                })}
                               
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
  