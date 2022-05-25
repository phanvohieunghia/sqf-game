import React, { useEffect, useState } from 'react'

import './style.scss'

const Popup = ({ children, content }) => {
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
  return (
    <div id="popup" onClick={handlePopup}>
      {children}
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
