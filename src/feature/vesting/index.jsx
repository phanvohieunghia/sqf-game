import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

import './style.scss'

const Vesting = () => {
  const { pathname } = useLocation()
  return (
    <div id="vesting">
      <div className="tab">
        {/* <NavLink
          to="/vesting/public-sale"
          className={'item' + (pathname == '/vesting' ? ' active' : '')}
        >
          Egg Basbet
        </NavLink> */}

        <NavLink to="/vesting/private-sale" className="item">
          Private sale
        </NavLink>
        <NavLink to="/vesting/presale" className="item">
          Pre-Sale
        </NavLink>
        <NavLink to="/vesting/public-sale" className="item">
          Public Sale
        </NavLink>
        <NavLink to="/vesting/airdrop" className="item">
          Airdrop
        </NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default Vesting
