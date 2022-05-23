import React from 'react'
import { Outlet } from 'react-router-dom'

import './style.scss'
import Sidebar from 'components/sidebar'
import SidebarMobile from 'components/sidebar-mobile'
import Header from 'components/header'
import Domdom from 'components/domdom'
import Popup from 'components/popup'
import MenuMobile from 'components/menu-mobile'

const Layout = () => {
  return (
    <>
      {window.innerWidth >= 1024 && <Sidebar />}
      {window.innerWidth < 1024 && <SidebarMobile />}
      {window.innerWidth < 1024 && <MenuMobile />}
      <main>
        <Domdom />
        <Header />
        <Outlet />
        <Popup />
      </main>
    </>
  )
}

export default Layout
