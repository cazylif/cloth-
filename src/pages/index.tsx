import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

/////improt component///
import Layout from '@/styles/layout'


type Props = {
    posts: [Post]
  }
  
  type Post = {
    _id: String;
    gmail: String;
    img_owner: String; 
    title: String;
    img: String;
    details: String;
    price: String;
    color: String;
    size: String;
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
  

  function Home(props: Props) {

    const [posts, setPosts] = useState<[Post]>(props.posts);
    console.log("posts:",posts)
    return (
      <main className="bg-slate-300 dark:bg-black">
      <Layout>
        
              {posts?.length > 0 ? (
                <div className="grid mt-20 mx-20 sm:grid-cols-4 md:grid-cols-4 xl:grid-cols-5 gap-4 ">
                  {posts.map((posts: any) => {
                    return (
                      <div key={posts._id} className="card w-auto  bg-slate-700 shadow-xl ">
                        <figure>
                            <Image
                                src={`${posts.img}`}
                                height={10}
                                width={400}
                                alt='product-image'
                            />
                            
                        </figure>
                        <div className="card-body rounded-b-[15px] bg-slate-400 dark:bg-slate-800">
                            <h2 className="card-title text-2xl text-black dark:text-slate-200">{posts.title}</h2>
                            <div className='relative'>
                                <p className='sm:text-sm md:text-sm xl:text-base text-black dark:text-slate-200'>{posts.price} ฿</p>
                            </div>
                            
                            <div className="card-actions justify-end">
                                <button className='btn sm:w-10 md:w-14 xl:w-16 btn-neutral text-black bg-slate-600 dark:text-slate-200 bg-slate-600'>Add cart</button>
                                
                                    <Link className="btn sm:w-10 md:w-20 xl:w-28 btn-neutral text-black bg-slate-600 dark:text-slate-200 bg-slate-600" href={`shop/${posts._id}`}>Go</Link>
                               
                                
                            </div>
                        </div>
                    </div>
                    )
                  })}
                </div>
              ) : (
                <h2 className="post-body-heading"> opps no post.</h2>
              )}
        
      </Layout>
    </main>
    )
}
export default Home