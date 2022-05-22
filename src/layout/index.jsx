import React from 'react'
import { Outlet } from 'react-router-dom'

import './style.scss'
import Sidebar from 'components/sidebar'
import Header from 'components/header'
import Domdom from 'components/domdom'
import Popup from 'components/popup'

const Layout = () => {
  return (
    <>
      <Sidebar />
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
