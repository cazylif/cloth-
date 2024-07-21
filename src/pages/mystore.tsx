
"use client"
import React from 'react'
import { useState } from 'react'
import { useSession, signIn } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';


//component import
// import Tableproduct from '@/components/tableproduct';
import Layout from '@/styles/layout';
import { get } from 'http';

//////////////////////////
type Props = {
  posts: [Post]
}

type Post = {
  _id: String;
  gmail: String;
  img_owner: String; 
  img: String;
  title: String;
  details: String;
  price: Number;
  color: String;
  size: String;
  // colorInfo: [any]
}

export async function getServerSideProps(){
  
  try {
    let response = await fetch("http://localhost:3000/api/getPosts");
    let posts = await response.json();
    console.log(posts)
    return {
      props: { posts: JSON.parse(JSON.stringify(posts)) } 
      
    }

  } catch(e) {
    console.error("errorrrr",e);
    return { props: {ok: false, reason: "some error description for your own consumption, not for client side"} }
  
}
};

//////////////////////

function page(props: Props) {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session } = useSession();
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [posts, setPosts] = useState<[Post]>(props.posts);

  const handleDeletePost = async (postId: string) => {
    console.log("hadledele> postid: ",postId)
    try {
      let response = await fetch("http://localhost:3000/api/deletePost?id=" + postId,{
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })

      response = await response.json();
      window.location.reload();

    } catch(error) {
      console.log("An error occure while deleting." , error);
    }
  }
  console.log("postindex",posts)
  
  console.log("session: ",session);
//////////get item in ColorInfo///
  // const Color = posts.map(getColor);
  // function getColor(item:any) {
  //   return [item.colorInfo.color.join("/")];
  // }
  // console.log("Coloooorrrrr",Color)
//////////get item in sizeInfo///
// const Size = posts.map(getSize);
//   function getSize(item:any) {
//     return [item.sizeInfo.size.join("/")];
//   }
//   console.log("Siizeeee",Color)

  if (session) {
    
    return(
      <Layout>
        <main className="">
          <div className='flex flex-row-reverse mb-4 mx-4'>
            <Link href='/create'>
              <button className='btn justify '>+create</button>
            </Link>
          </div>
          <div className="overflow-x-auto w-full">
            <table className="table  mb-80">
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
                  {posts?.length > 0 ? (
                    
                    <tbody >
                      {posts.map((posts: any) => {
                          
                        return (
                            <tr key={posts._id}>
                                <th>{posts._id}</th>
                                <td>
                                  <Image
                                    src={`${posts.img}`}
                                    height={70}
                                    width={70}
                                    alt="image"
                                  />
                                  
                                </td>
                                <td>{posts.title}</td>
                                <td>{posts.details}</td>
                                <td>{posts.price}</td>
                                <td>{posts.colorInfo.color}</td>
                                <td>{posts.sizeInfo.size}</td>
                                <td> 
                                  <Link className='btn mx-2' href={`mystore/${posts._id}`}>Edit</Link>
                                  <Link className='btn' onClick={() => handleDeletePost(posts._id as string) } href=''>Delete</Link>
                                </td>
                                {/* <th>1</th> */}
                            </tr>
                        )
                      })}
                      </tbody>
                    
                  ) : (
                    <h2 className='flex justify-center'>NO PRODUCT...</h2>
                  )}
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
        </main>
      </Layout>
    )
    
  }
  return (
    <Layout>
      <div className='flex justify-center mt-28'>
        <button onClick={() => signIn()} className='btn'>Login with Google</button>
      </div>
    </Layout>
  )
}

export default page
