import React, { useState } from 'react'

import './style.scss'

const Popup = () => {
  const [state, setState] = useState(false)
  function showPopup() {
    setState(true)
    setTimeout(function () {
      setState(false)
    }, 1000)
  }
  return <>{state && <div className="popup">COMING SOON!</div>}</>
}

export default Popup
