import React from 'react'

import './style.scss'
import Popup from 'components/popup/comingsoon-button'

const NFTs = () => {
  return (
    <div className="box-nfts">
      <div className="left item">
        <img src={require('assets/img/item2.png')} alt="error png" />
      </div>
      <div className="right item">
        <h1 className="primary-tex-yellow">NFTs</h1>
        <p className="primary-tex-gray font-weight-700">
          Amount of SQF can claim:&nbsp;
          <span className="primary-tex-yellow font-weight-700 ">0</span>
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
