import React from 'react'

import './style.scss'
import globalSlice from 'reducers/global'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from 'selectors'

const Button = () => {
  const dispatch = useDispatch()
  const state = useSelector(toggleMenu)
  function handleButton() {
    dispatch(globalSlice.actions.toggleMenu(!state))
  }
  return (
    <div className="menu">
      <div
        className={'nav__icon-soft' + (state ? ' icon-translate' : '')}
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
