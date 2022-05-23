import React from 'react'

import './style.scss'
import { useSelector } from 'react-redux'
import { toggleMenu } from 'selectors'

const SidebarMobile = () => {
  const state = useSelector(toggleMenu)
  return (
    <>
      {state && (
        <div className="sidebar-mobile">
          <div className="list">
            <div className="item">Dashboard</div>
            <div className="item">Egg baskets</div>
            <div className="item">My Assets</div>
            <div className="item">Marketplace</div>
            <div className="item">Staking</div>
            <div className="item">Vesting</div>
          </div>
        </div>
      )}
    </>
  )
}

export default SidebarMobile
