import React from 'react'

import './style.scss'
import Icons from 'assets/icons'

const Account = () => {
  return (
    <>
      <div className="box-staking">
        <div className="item left">
          <h1>My MSP Staking</h1>
          <div className="info">
            <div className="info-item">
              <div className="title">TOTAL STAKED</div>
              <span className="coin">
                <span className="green-color">0</span>MSP
              </span>
            </div>
            <div className="info-item">
              <div className="title">AVAILABLE WALLET</div>
              <span className="coin">
                <span className="green-color">0</span>MSP
              </span>
            </div>
          </div>
          <div className="button active">
            <button>Stake</button>
          </div>
          <div className="button">
            <button>Stake</button>
          </div>
        </div>
        <div className="wrapper">
          <div className="item right">
            <h1>Total Staked</h1>
            <div className="coin">
              <span className="green-color">0</span>MSP
            </div>
            <Icons.Lock height={'50'} />
          </div>
          <div className="item right">
            <h1>My Rank</h1>
            <div className="rank-box">
              <span>Rank: ~</span>
              <span>
                Point: <span>0</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="box-staking">
        <div className="item left">
          <h1>Claimable</h1>
          <div className="coin">
            <span className="green-color">0</span>MSP
          </div>
          <div className="claim-button">
            <button>Claim</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Account
