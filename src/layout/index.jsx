import React from 'react'
import { Outlet } from 'react-router-dom'

import './style.scss'
import Sidebar from 'components/sidebar'
import SidebarMobile from 'components/sidebar-mobile'
import Header from 'components/header'
import Domdom from 'components/domdom'
import MenuMobile from 'components/menu-mobile'

const Layout = () => {
  return (
    <>
      {window.innerWidth >= 1024 && <Sidebar />}
      {window.innerWidth < 1024 && <SidebarMobile />}
      {window.innerWidth < 1024 && <MenuMobile />}
      <main>
        {/* <Domdom /> */}
        {window.innerWidth < 1024 && (
          <div className="logo">
            <img src={require('assets/img/logo.png')} alt="error png" />
          </div>
        )}
        <Header />
        <Outlet />
      </main>
    </>
  )
}

export default Layout
