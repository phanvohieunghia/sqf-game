import React, { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import './style.scss'
import Popup from 'components/popup/comingsoon-button'
import TypeItem from 'assets/data/item-type.json'
import Items from 'assets/data/items.json'
import detailPopupSlice from 'components/popup/detail/slice'

const OnMarket = () => {
  return (
    <div className="on-market-box">
      <div className="list-item">
        <div className="container">
          <RenderItemList />
        </div>
      </div>
    </div>
  )
}
function RenderItemList() {
  const refObj = useRef(TypeItem)
  return (
    <div className="row">
      {Items.map((item) => {
        return <Item infor={item} type={refObj.current[item.type]} />
      })}
    </div>
  )
}
const Item = (props) => {
  const { infor, type } = props
  const itemRef = useRef(null)
  const dispatch = useDispatch()
  function handleDetailPopup() {
    dispatch(detailPopupSlice.actions.showPopup(infor))
  }
  useEffect(() => {
    itemRef.current.parentElement.setAttribute('data-after', infor.name)
  })
  return (
    <div
      className="item col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2"
      key={infor.id}
    >
      <div className="wrapper" onClick={handleDetailPopup}>
        <div className="title">
          <img src={require('assets/img/title.png')} alt="error png" />
          <span ref={itemRef}>{infor.name}</span>
        </div>
        <div className="img">
          <img
            src={require(`assets/img/items/${infor.path}`)}
            alt="error png"
          />
        </div>
        <div className="information">
          <div className="info-item">
            <img src={require('assets/img/gem1.png')} alt="error png" />
            <label>Rarity: </label>
            <span>{infor.rarity}</span>
          </div>
          <div className="info-item">
            <img src={require('assets/img/gem3.png')} alt="error png" />
            <label>Date: </label>
            <span>29/5/2022</span>
          </div>
          <div className="info-item">
            <img src={require('assets/img/gem2.png')} alt="error png" />
            <label>Type: </label>
            <span>{infor.type}</span>
          </div>
          {infor.type !== 'weapon' ? (
            <div className="info-item">
              <img src={require('assets/img/gem4.png')} alt="error png" />
              <label>Object: </label>
              <span>{type}</span>
            </div>
          ) : (
            <div className="info-item">
              <span>&nbsp;</span>
            </div>
          )}
        </div>
        <div className="price">
          <span className="img">
            <img src={require('assets/img/coin.png')} alt="error png" />
          </span>
          <span className="coin">{infor.price} SQF</span>
        </div>
        <div className="button">
          <button>
            <Popup />
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
export default OnMarket
