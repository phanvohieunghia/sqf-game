import React from 'react'
import { NavLink } from 'react-router-dom'

import './style.scss'
import Popup from 'components/popup'

const Sidebar = () => {
  function showClick() {
    console.log('click egg baskets')
  }
  return (
    <div className="sidebar">
      <div className="img">
        <img src={require('assets/img/logo.png')} alt="error png" />
      </div>
      <NavLink to="/">
        <Popup>Dashboard</Popup>
      </NavLink>
      <NavLink to="/egg-baskets" onClick={showClick}>
        <Popup>Egg baskets</Popup>
      </NavLink>
      <NavLink to="my-assets">My Assets</NavLink>
      <NavLink to="marketplace">Marketplace</NavLink>
      <NavLink to="staking">Staking</NavLink>
      <NavLink to="vesting">Vesting</NavLink>
    </div>
  )
}

export default Sidebar
