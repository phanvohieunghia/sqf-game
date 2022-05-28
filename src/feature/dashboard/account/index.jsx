import React from 'react'

import './style.scss'
import Icons from 'assets/icons'

const Dashboard = () => {
  return (
    <div className="account">
      <div className="container">
        <h3>Overview</h3>
        <div className="content overview">
          <div className="item">
            <img
              src={require('assets/img/dashboard-account/weapon.png')}
              alt="error png"
            />
            :<span> 0</span>
          </div>
          <div className="item">
            <img
              src={require('assets/img/dashboard-account/outfit.png')}
              alt="error png"
            />
            :<span> 0</span>
          </div>
          <div className="item">
            <img
              src={require('assets/img/dashboard-account/stone.png')}
              alt="error png"
            />
            :<span> 0</span>
          </div>
          <div className="item">
            <img
              src={require('assets/img/dashboard-account/pet.png')}
              alt="error png"
            />
            :<span> 0</span>
          </div>
        </div>
        <h3>Activity History</h3>
        <div className="content">
          <div className="item">No data</div>
        </div>
        <h3>Buy Token History</h3>
        <div className="content">
          <div className="item">No data</div>
        </div>
        <h3>My Wallet</h3>
        <div className="content">
          <div className="item">
            <label>Total token buy:</label>
            <span>0</span>
            <span className="unit"> SQF</span>
          </div>
          <div className="item">
            <label>Balance:</label>
            <span>0</span>
            <span className="unit"> SQF</span>
          </div>
          <div className="item">
            <label>Ablance Available:</label>
            <span>0</span>
            <span className="unit"> SQF</span>
          </div>
          <div className="item">
            <label>Unlock Percent:</label>
            <span>0</span>
            <span className="unit"> %</span>
          </div>
          <div className="item">
            <label>Claimed Percent:</label>
            <span>0</span>
            <span className="unit"> %</span>
          </div>
          <div className="item2">
            <label>Address:</label>
            <span>0x307e415778f2aa486e20387a8ecddf69c68783fe</span>
            <span>
              <Icons.Copy height={'20'} />
            </span>
          </div>
          <div className="item2">
            <label>Reference Link:</label>
            <span>https://sqf-gunbow.vercel.app</span>
            <span>
              <Icons.Copy height={'20'} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
