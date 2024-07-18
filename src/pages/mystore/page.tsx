import React from 'react'



//component import
import MyNavbar from "@/components/navbar";
import Card from "@/components/card";
import Footer from "@/components/footer";
import Breadcrumbs from "@/components/breadcrumbs";
import Component from '@/components/login-btn';
import Tableproduct from '@/components/tableproduct';
import Link from 'next/link';
import Layout from '@/styles/layout';

function page() {

  return (
    <main className="">

      <Layout>

        <div className='flex flex-row-reverse mb-4 mx-4'>
          <Link href='/create/page'>
            <button className='btn justify '>+create</button>
          </Link>
        </div>
        <Tableproduct/>
      </Layout>

    </main>
  )
}

export default page
