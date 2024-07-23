/* eslint-disable react/no-children-prop */
import React, { Children } from 'react'
import Navbar from '@/components/navbar'
import Breadcrumbs from '@/components/breadcrumbs'
import Footer from '@/components/footer'
import { Providers } from '../pages/providers'

function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    // <html lang="en" s>
      <div className='' >
        <Providers>
          <Navbar />
          <Breadcrumbs/>
          <div className=''>
            {children}
          </div>
          <div className="flex flex-col min-h-screen ">
              <Footer/>
          </div>
        </Providers>
      </div>
    //</html> *
  )
}

export default Layout
