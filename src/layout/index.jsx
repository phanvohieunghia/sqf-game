import React from 'react'
import { Outlet } from 'react-router-dom'

import './style.scss'
import Sidebar from 'components/sidebar'
import SidebarMobile from 'components/sidebar-mobile'
import Header from 'components/header'
import Firefly from 'components/firefly'
import MenuMobile from 'components/menu-mobile'
import DetailPopup from 'components/popup/detail'
import ComingSoon from 'components/popup/comingsoon'

const Layout = () => {
  return (
    <>
      {window.innerWidth >= 1024 && <Sidebar />}
      {window.innerWidth < 1024 && <SidebarMobile />}
      {window.innerWidth < 1024 && <MenuMobile />}
      <main>
        <DetailPopup />
        <Firefly />
        <Header />
        <ComingSoon />
        <Outlet />
      </main>
    </>
  )
}

export default Layout
