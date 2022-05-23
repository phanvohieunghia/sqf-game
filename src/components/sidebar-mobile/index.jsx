import React from 'react'

import './style.scss'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMenu } from 'selectors'
import { NavLink } from 'react-router-dom'
import globalSlice from 'reducers/global'

const SidebarMobile = () => {
  const dispatch = useDispatch()
  function handleItem() {
    dispatch(globalSlice.actions.toggleMenu(false))
  }
  const state = useSelector(toggleMenu)
  return (
    <>
      {state && (
        <div className="sidebar-mobile">
          <div className="list">
            <NavLink onClick={handleItem} className="item" to="/">
              Dashboard
            </NavLink>
            <NavLink onClick={handleItem} className="item" to="/egg-baskets">
              Egg baskets
            </NavLink>
            <NavLink onClick={handleItem} className="item" to="/my-assets">
              My Assets
            </NavLink>
            <NavLink onClick={handleItem} className="item" to="/marketplace">
              Marketplace
            </NavLink>
            <NavLink onClick={handleItem} className="item" to="/staking">
              Staking
            </NavLink>
            <NavLink onClick={handleItem} className="item" to="/vesting">
              Vesting
            </NavLink>

            {/* <div className="item">Dashboard</div>
            <div className="item">Egg baskets</div>
            <div className="item">My Assets</div>
            <div className="item">Marketplace</div>
            <div className="item">Staking</div>
            <div className="item">Vesting</div> */}
          </div>
        </div>
      )}
    </>
  )
}

export default SidebarMobile
