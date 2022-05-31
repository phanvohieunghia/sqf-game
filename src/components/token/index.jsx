import React from 'react'
import { useLocation } from 'react-router-dom'

import './style.scss'
import Popup from 'components/popup/comingsoon-old'

const Token = () => {
  const { pathname } = useLocation()
  const isAirdrop = pathname === '/vesting/airdrop'
  return (
    <div className="box-token">
      <div className="left item">
        <img src={require('assets/img/item2.png')} alt="error png" />
      </div>
      <div className="right item">
        <h1 className="primary-tex-yellow">Token</h1>
        {!isAirdrop && (
          <>
            <p className="primary-tex-gray font-weight-700">
              Total locked SQF:
              <div>
                <span className="primary-tex-yellow">0</span> SQF
              </div>
            </p>
            <p className="primary-tex-gray font-weight-700">
              Total SQF claimed:
              <div>
                <span className="primary-tex-yellow">0</span>
              </div>
            </p>
            <p className="primary-tex-gray font-weight-700">
              Next claimable percent:
              <div>
                <span className="primary-tex-yellow">0</span> SQF
              </div>
            </p>
          </>
        )}
        <p className="primary-tex-gray font-weight-700">
          Amount of SQF can claim:
          <div>
            <span className="primary-tex-yellow">0</span>
          </div>
        </p>
        <p className="primary-tex-gray font-weight-700">
          <div>
            Unlock <span className="yellow-color">100%</span> when claim
          </div>
        </p>
        <div className="claim-button">
          <Popup />
          <button>Claim</button>
        </div>
      </div>
    </div>
  )
}

export default Token
