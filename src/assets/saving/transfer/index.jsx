import React from 'react'

const Transfer = () => {
  return (
    <div className="container">
      <div className="transfer">
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
            <Popup />
            Button
          </button>
        </div>
      </div>
    </div>
  )
}

export default Transfer
