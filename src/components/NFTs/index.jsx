import React from 'react'

import './style.scss'
import Popup from 'components/popup/comingsoon'

const NFTs = () => {
  return (
    <div className="box-nfts">
      <div className="left item">
        <img src={require('assets/img/item2.png')} alt="error png" />
      </div>
      <div className="right item">
        <h1>NFTs</h1>
        <p>
          Amount of MSP can claim: <span className="green-color">0</span>
        </p>
        <div className="claim-button">
          <button>
            Claim
            <Popup />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NFTs
