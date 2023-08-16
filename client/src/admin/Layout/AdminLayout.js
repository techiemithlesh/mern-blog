import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

const AdminLayout = ({children}) => {
  return (
    <>
    <Header/>
      <div className='container flex'>
        <div className='w-2/12 bg-slate-400 px-4'>
          <Sidebar/>
        </div>
        <main style={{minHeight: '90vh'}}>{children}</main>
      </div>
    <Footer/>
    </>
  )
}

export default AdminLayout