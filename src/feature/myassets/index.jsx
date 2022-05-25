import React from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'

import './style.scss'
import Popup from 'components/popup'

const MyAssets = () => {
  const { pathname } = useLocation()
  return (
    <div id="myassets">
      <div className="tab">
        <NavLink
          to="not-on-market"
          className={'item' + (pathname === '/my-assets' ? ' active' : '')}
        >
          Not on market
        </NavLink>
        <NavLink to="on-market" className="item">
          <Popup>On the market</Popup>
        </NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default MyAssets
