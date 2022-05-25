import React, { useEffect, useRef, useState } from 'react'

import './style.scss'

const Popup = ({ content }) => {
  const mainRef = useRef(null)
  const [state, setState] = useState(false)
  const handlePopup = (e) => {
    console.log(e)
    e.stopPropagation()
    e.preventDefault()
    setState(!state)
  }
  function handleState() {
    setState(!state)
  }
  useEffect(() => {
    mainRef.current.parentElement.style.position = 'relative'
  }, [])
  return (
    <div id="popup" onClick={handlePopup} ref={mainRef}>
      {state && <PopupContent content={content} onState={handleState} />}
    </div>
  )
}
const PopupContent = ({ content = 'COMING SOON!', onState }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onState()
      return () => clearTimeout(timeoutId)
    }, 1900)
    console.log(timeoutId)
  }, [])
  return <div className="popup">{content}</div>
}

export default Popup
