import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'


// type Props = {
//     posts: [Post]
//   }
  
//   type Post = {
//     _id: String;
//     gmail: String;
//     img_owner: String; 
//     title: String;
//     img: String;
//     details: String;
//     price: Number;
//     color: String;
//     size: String;
//   }


  
//   export async function getServerSideProps(){
  
//     try {
//       let response = await fetch("http://localhost:3000/api/getPosts");
//       let posts = await response.json();
//       console.log(posts)
//       return {
//         props: { posts: JSON.parse(JSON.stringify(posts)) } 
        
//       }
  
//     } catch(e) {
//       console.error("errorrrr",e);
//       return { props: {ok: false, reason: "some error description for your own consumption, not for client side"} }
    
//   }
//   }


function Card() {

    // const [posts, setPosts] = useState<[Post]>(props.posts);
    // console.log("posts:",posts)
    return (
        // <div className="card w-auto  bg-slate-700 w-96 shadow-xl ">
        //     <figure>
        //         <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        //     </figure>
        //     <div className="card-body">
        //         <h2 className="card-title">Shoes!</h2>
        //         <div className='relative'>
        //             <p className='sm:text-sm md:text-sm xl:text-base '>2500฿</p>
        //         </div>
                
        //         <div className="card-actions justify-end">
        //             <button className='btn sm:w-10 md:w-14 xl:w-16 btn-neutral'>Add cart</button>
        //             <Link href='/shop/page'>
        //                 <button className="btn sm:w-10 md:w-20 xl:w-28 btn-neutral">Go</button>
        //             </Link>
                    
        //         </div>
        //     </div>
        // </div>

        <div className="">
          {/* <h1 className="posts-body-heading">Top 20 posts</h1>
          {posts?.length > 0 ? (
            <div>
              {posts.map((post, index) => {
                return (
                    <div key={index} className="card w-auto  bg-slate-700 w-96 shadow-xl ">
                        <figure>
                            <Image
                                src={`${post.img}`}
                                height={100}
                                width={100}
                                alt='product-image'
                            />
                            
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <div className='relative'>
                                <p className='sm:text-sm md:text-sm xl:text-base '>{post.price.toString()}</p>
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
              })}
            </div>
          ) : (
            <h2 className="post-body-heading"> opps no post.</h2>
          )} */}

        </div>
    )
}
export default Card