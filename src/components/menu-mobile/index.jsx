import React, { useState } from 'react'

import './style.scss'
import globalSlice from 'reducers/global'
import { useDispatch } from 'react-redux'

const Button = () => {
  const dispatch = useDispatch()
  const [toggle, setToggle] = useState(false)
  function handleButton() {
    setToggle(!toggle)
    dispatch(globalSlice.actions.toggleMenu(!toggle))
  }
  return (
    <div className="menu">
      <div
        className={'nav__icon-soft' + (toggle ? ' icon-translate' : '')}
        onClick={handleButton}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Button
