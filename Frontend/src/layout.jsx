import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Component/Header/Header'

function Layout() {
  return (
    <>
    {/* <Header></Header> */}
    <Outlet></Outlet>
    {/* <Footer></Footer> */}
    </>
  )
}

export default Layout