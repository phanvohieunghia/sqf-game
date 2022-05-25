import React from 'react'
import { useParams } from 'react-router-dom'

import './style.scss'
import Popup from 'components/popup'

const Detail = () => {
  let { itemId } = useParams()
  return (
    <div id="detail">
      <div className="tab">
        <div className="item">
          Egg basket
          <Popup />
        </div>
        <div className="item">
          Item
          <Popup />
        </div>
      </div>
      <div className="box-detail">
        <div className="container">
          <div className="left">
            <div className="img">
              <img
                src={require('assets/img/item-detail.png')}
                alt="error png"
              />
            </div>
            <div className="price">
              <img src={require('assets/img/coin.png')} alt="error png" />
              <span>490 MSP</span>
            </div>
            <div className="button">
              <button>
                Buy
                <Popup />
              </button>
            </div>
          </div>
          <div className="right">
            <h3>About</h3>
            <div className="content">
              <div className="item">
                <label>Owner</label>
                <div className="text">
                  0x490b448ecd1d6609a506dc7cd14966ed0fe888c6
                </div>
              </div>
              <div className="item">
                <label>ID Basket</label>
                <div className="text">1435</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
