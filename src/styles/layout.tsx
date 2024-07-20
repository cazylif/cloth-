import React, { Children } from 'react'
import Navbar from '@/components/navbar'
import Breadcrumbs from '@/components/breadcrumbs'
import Footer from '@/components/footer'

function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className=''>
        <Navbar/>
        <Breadcrumbs/>
        <div >
          {children}
        </div>
        <div className="flex flex-col min-h-screen ">
            <Footer/>
        </div>
    </div>
  )
}

export default Layout
