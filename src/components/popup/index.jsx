import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './style.scss'
import { showPopup } from 'selectors'
import globalSlice from 'reducers/globalSlice'

const Popup = ({ children, content }) => {
  const dispath = useDispatch()
  const selfRef = useRef(null)
  const state = useSelector(showPopup)
  function handlePopup(e) {
    e.preventDefault()
    dispath(globalSlice.actions.showPopup(true))
  }
  useEffect(() => {})
  return (
    <a id="popup" ref={selfRef} onClick={handlePopup}>
      {children}
      {state && <PopupContent content={content} />}
    </a>
  )
}
const PopupContent = ({ content = 'COMING SOON!' }) => {
  const dispath = useDispatch()
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispath(globalSlice.actions.showPopup(false))
    }, 1000)
    return () => clearTimeout(timeoutId)
  })
  return <div className="popup">{content}</div>
}

export default Popup
