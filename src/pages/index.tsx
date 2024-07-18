import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"
import Component from "@/components/login-btn";
import { useState } from "react";

//component import
import MyNavbar from "@/components/navbar";
import Card from "@/components/card";
import Footer from "@/components/footer";
import Breadcrumbs from "@/components/breadcrumbs";
import Layout from "@/styles/layout";
import clientPromise from "../../lib/mongodb";

type Props = {
  posts: [Post]
}

type Post = {
  _id: String;
  title: String;
  content: String;
}

export async function getServerSideProps(){

  try {
    let response = await fetch("http://localhost:3000/api/getPosts");
    let posts = await response.json();

    return {
      props: { posts: JSON.parse(JSON.stringify(posts)) } 
      
    }

  } catch(e) {
    // console.error(e);
    return { props: {ok: false, reason: "some error description for your own consumption, not for client side"} }
  
}
}

export default function Home(props: Props) {
  
const [posts, setPosts] = useState<[Post]>(props.posts);

  return (
    <main className="">
      <Layout>
        <div className="grid mt-20 mx-20 sm:grid-cols-4 md:grid-cols-4 xl:grid-cols-5 gap-4  ">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div className="posts-body">
          <h1 className="posts-body-heading">Top 20 posts</h1>
          {posts?.length > 0 ? (
            <ul>
              {posts.map((post, index) => {
                return (
                  <li key={index} className="post-item">
                    <div className="post-item-details">
                      <h2>{post.title}</h2>
                      <p>{post.content}</p>
                    </div>
                    <div className="post-item-actions">
                      <a href="#">Edit</a>
                      <button className="btn">Delete</button>

                    </div>
                  </li>
                )
              })}
            </ul>
          ) : (
            <h2 className="post-body-heading"> opps no post...</h2>
          )}

        </div>
      </Layout>

      
      
    </main>
  );
}
