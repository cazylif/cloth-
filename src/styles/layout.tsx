import React from 'react'
import Navbar from '@/components/navbar'
import Breadcrumbs from '@/components/breadcrumbs'
import Footer from '@/components/footer'

function Layout(props: any) {
  return (
    <div>
        <Navbar/>
        <Breadcrumbs/>
        <div>
          {props.children}
        </div>
        {/* <div className="relative min-h-screen mt-80">
            <Footer/>
        </div> */}
    </div>
  )
}

export default Layout
