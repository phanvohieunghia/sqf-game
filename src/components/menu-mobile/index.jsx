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
        className={'nav-icon' + (state ? ' closed' : '')}
        onClick={handleButton}
      >
        <div></div>
      </div>
    </div>
  )
}

export default Button
