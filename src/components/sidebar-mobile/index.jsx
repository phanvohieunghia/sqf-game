import React from 'react'

import './style.scss'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMenu } from 'selectors'
import { NavLink } from 'react-router-dom'
import globalSlice from 'reducers/globalSlice'

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
          </div>
        </div>
      )}
    </>
  )
}

export default SidebarMobile
