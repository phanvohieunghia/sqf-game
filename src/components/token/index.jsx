import React from 'react'

import './style.scss'

const Token = () => {
  return (
    <div className="box">
      <div className="left item">
        <img src={require('assets/img/item2.png')} alt="error png" />
      </div>
      <div className="right item">
        <h1>Token</h1>
        <p>
          Total locked SQF: <span className="green-color">0</span> MSP
        </p>
        <p>
          Total MSP claimed: <span className="green-color">0</span>
        </p>
        <p>
          Next claimable percent: <span className="green-color">0</span> MSP
        </p>
        <p>
          Amount of MSP can claim: <span className="green-color">0</span>
        </p>
        <p>
          Unlock <span className="yellow-color">100%</span> when claim
        </p>
        <div className="claim-button">
          <button>Claim</button>
        </div>
      </div>
    </div>
  )
}

export default Token
