import React from 'react'

import './style.scss'
import Popup from 'components/popup'

const NotOnMaket = () => {
  return (
    <div className="container">
      <div className="not-on-market-box">
        <div className="item">
          <label>Transfer to wallet</label>
          <input
            type="text"
            placeholder="Enter the wallet address you want to transfer to"
          />
        </div>
        <div className="item">
          <label>Transfer to wallet</label>
          <input type="text" placeholder="Enter the quantity" />
        </div>
        <div className="button">
          <button>
            <Popup>Button</Popup>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotOnMaket
