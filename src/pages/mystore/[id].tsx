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
  // color: String;
  // size: String;
}

type ResponseFromServer = {
  _id: String;
  gmail: String;
  imgOwner: String; 
  img: String;
  title: String;
  details: String;
  price: String;
  // color: String;
  // size: String;
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
            // color: responseFromServer.color,
            // size: responseFromServer.size,
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
          // color: "",
          // size: "",
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


function EditPost({
  post: { _id, img, title, details, price ,gmail ,imgOwner }
}: ContentPageProps) {
  
    console.log("title:",title)
    const { data: session } = useSession() ;
    const router = useRouter()

    const [ error, setError] = useState("");
    const [ message, setMessage] = useState("");
    
    const [ postTitle, setPostTitle ] = useState(title);
    const [ postImg, setPostImg ] = useState(img);
    const [ postDetails, setPostDetails ] = useState(details);
    const [ postPrice, setPostPrice ] = useState(price);
    const [ postgmail, setGmail ] = useState(gmail);
    const imon = session?.user?.image
    const [ postimgOwner, setImgOwner ] = useState(imon);
    const [ postColorInfo, setPostColorInfo ] = useState({
        color: [],
    } as any);

    const [ postSizeInfo, setPostSizeInfo ] = useState({
        size: [],
    } as any);
    
    ////////handle color/////
    const handleChangeColor = (e: any) => {
        const { value, checked } = e.target;
        const { color } = postColorInfo;


        if (checked) {
            setPostColorInfo({
            color: [...color, value],
            // responseColor: [...color, value],
            })
        }
        else {
            setPostColorInfo({
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
      const { size } = postSizeInfo;
    
      // console.log(`${value} is ${checked}`)  
      if (checked) {
        setPostSizeInfo({
          size: [...size, value],
          // responseSize: [...size, value],
        });
      }
    
      else {
        setPostSizeInfo({
          size: size.filter(
            (e:any) => e !== value
          ),
          // responseSize: size.filter(
          //   (e:any) => e !== value
          // )
        });
      }
    };
    console.log("color: ",postColorInfo.color)
    console.log("size: ",postSizeInfo.size)

    ///////handlesubit button/////////////////
  const handleSubmit = async (e: any) => {
  
    e.preventDefault();
    setImgOwner(session?.user?.image)
    // const imon = session?.user?.image
    console.log("[id].tsx >",postTitle , postImg , postDetails , postPrice , postColorInfo , postSizeInfo, postgmail , postimgOwner ,"imon >", imon)
    if (postTitle && postImg  && postDetails && postPrice && postgmail && postimgOwner && postColorInfo.color.length > 0 && postSizeInfo.size.length > 0) {
      try {

        let response = await fetch("http://localhost:3000/api/editPost?id=" + _id,{
            method: "POST",
            body: JSON.stringify({
              
              title: postTitle,
              img: postImg,
              details: postDetails,
              price: postPrice,
              gmail: postgmail,
              imgOwner: postimgOwner,
              colorInfo: postColorInfo,
              sizeInfo: postSizeInfo,

            }),
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "appication/json"
            }
          })
        
          response = await response.json();
          setPostImg("");
          setPostTitle("");
          setPostDetails("");
          setPostPrice("");
          setPostColorInfo("");
          setPostSizeInfo("");
          setError("");
          setMessage("Post edited successfully!")
          

      } catch(errorMessage: any) {
        setError(errorMessage)
      }
    } else {
      return setError("All field are requir..")
    }
    
  }
//////////////////
    
   
    if (session){
        // const gmail = session.user?.email;
        // const img_owner = session.user?.image;
        console.log("error: ",error);
        return(
          <Layout>
            <div className='container mx-auto'>
              <form onSubmit={ handleSubmit } id='form'>
                {error? <div className='alert'>{error}</div> : null}
                {message? <div className='alert'>{message}</div> : null}
                <h1 className='text-slate-400 font-bold text-2xl mt-9'>Create Product</h1>
                <br />
                <p className='text-slate-400 font-bold'>-image url-</p>
                <input name='img' onChange={(e) => setPostImg(e.target.value)} value={postImg ? postImg : ""} type="text" placeholder="Image url" className="input input-bordered w-full max-w-xs" />
                
                <p className='text-slate-400 font-bold'>-title-</p>
                <input name='title' onChange={(e) => setPostTitle(e.target.value)} value={postTitle ? postTitle : ""} type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" />

                <p className='text-slate-400 font-bold'>-detail-</p>
                <textarea name='details' onChange={(e) => setPostDetails(e.target.value)} value={postDetails ? postDetails : ""} placeholder={`${postColorInfo.responseColor}`} className="textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea>
                
                <p className='text-slate-400 font-bold'>-price-</p>
                <input name='price' onChange={(e) => setPostPrice(e.target.value)} value={postPrice ? postPrice : ""} type="number" placeholder="Price" className="input input-bordered w-full max-w-xs" />

                <p className='text-slate-400 font-bold mt-7'>-color-</p>
                <div className='flex'>
                  <input type="checkbox"  className="checkbox mr-2" value={"black"} onChange={ handleChangeColor }/><p className='mr-6'>black</p>
                  <input type="checkbox"  className="checkbox mr-2" value={"white"} onChange={ handleChangeColor }/><p className='mr-6'>white</p>
                  <input type="checkbox"  className="checkbox mr-2" value={"red"} onChange={ handleChangeColor }/><p className='mr-6'>red</p>
                  <input type="checkbox"  className="checkbox mr-2" value={"blue"} onChange={ handleChangeColor }/><p className='mr-6'>blue</p>
                  <input type="checkbox"  className="checkbox mr-2" value={"green"} onChange={ handleChangeColor }/><p className='mr-6'>green</p>
                  <input type="checkbox"  className="checkbox mr-2" value={"pink"} onChange={ handleChangeColor }/><p className='mr-6'>pink</p>
                </div>
                <p className='text-slate-400 font-bold mt-7'>-size-</p>
                <div className='flex'>
                  <input type="checkbox"  className="checkbox mr-2" value={"S"} onChange={ handleChangeSize }/><p className='mr-6'>S</p>
                  <input type="checkbox"  className="checkbox mr-2" value={"M"} onChange={ handleChangeSize }/><p className='mr-6'>M</p>
                  <input type="checkbox"  className="checkbox mr-2" value={"L"} onChange={ handleChangeSize }/><p className='mr-6'>L</p>
                  <input type="checkbox"  className="checkbox mr-2" value={"XL"} onChange={ handleChangeSize }/><p className='mr-6'>XL</p>
                  <input type="checkbox"  className="checkbox mr-2" value={"2XL"} onChange={ handleChangeSize }/><p className='mr-6'>2XL</p>
                </div>
                

                <div className='flex justify-center mt-28'>
                  <Link href='/mystore'>
                    <button className="btn btn-outline w-28 mx-4">Cencel</button>
                  </Link>
                  <button type='submit' className="btn btn-outline w-28"  >Update</button>
                </div>

              </form>
              
              

            </div>
          </Layout>
        )
      }
        return(
          <Layout>
            <div className='flex justify-center mt-28'>
              <button onClick={() => signIn()} className='btn'>Login with Google</button>
            </div>
          </Layout>
        )
  
}

export default EditPost
