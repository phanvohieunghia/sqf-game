import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import './style.scss'
import globalSlice from 'reducers/globalSlice'

const Popup = () => {
  const mainRef = useRef(null)
  const dispatch = useDispatch()
  const handlePopup = (e) => {
    dispatch(globalSlice.actions.showPopup(true))
    e.stopPropagation()
    e.preventDefault()
  }
  useEffect(() => {
    mainRef.current.parentElement.style.position = 'relative'
  }, [])
  return <div id="popup-button" onClick={handlePopup} ref={mainRef}></div>
}

export default Popup
