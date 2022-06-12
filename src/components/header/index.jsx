import React from 'react'

import './style.scss'

const Header = () => {
  return (
    <header>
      <div className="hd-items">
        <div className="item">
          <img src={require('assets/img/coin.png')} alt="error png" />
          <span className="primary-tex-yellow font-weight-700">0</span>
        </div>
        <div className="item">
          <img src={require('assets/img/coin2.png')} alt="error png" />
          <span className="primary-tex-yellow font-weight-700">0</span>
        </div>
      </div>
      {true ? (
        <a href="/" className="account"></a>
      ) : (
        <a href="/" className="button"></a>
      )}
    </header>
  )
}

export default Header
