import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import './style.scss'
import Pagination from 'components/pagination'
import Icons from 'assets/icons'
import Popup from 'components/popup'
import Items from 'assets/data/items.json'

const MarketPlace = () => {
  return (
    <div id="marketplace">
      <div className="main">
        <div className="summary">
          <div className="d-flex container justify-content-center">
            <div className="item">
              <span className="img">
                <img src={require('assets/img/item.png')} alt="error png" />
              </span>
              <span className="infor">
                <h4>Last price</h4>
                <span className="greenColor">384</span>
              </span>
            </div>
            <div className="item">
              <span className="img">
                <img src={require('assets/img/item.png')} alt="error png" />
              </span>
              <span className="infor">
                <h4>Total volume</h4>
                <span className="yellowColor">161284</span>
              </span>
            </div>
            <div className="item">
              <span className="img">
                <img src={require('assets/img/item.png')} alt="error png" />
              </span>
              <span className="infor">
                <h4>MSP price</h4>
                <span className="yellowColor">
                  0.18 <span>BUSD</span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="tab">
          <div className="item">
            Egg Basbet
            <Popup />
          </div>
          <div className="item">
            Item
            <Popup />
          </div>
        </div>
        <div className="filter">
          <label>Filter</label>
          <div className="select">
            <Icons.AngleDown height={'10'} />
            <select>
              <option value="lowest">Lowest Price</option>
              <option value="highest">Highest Price</option>
            </select>
          </div>
          <div className="input">
            <input type="text" placeholder="Egg basket ID" />
            <img src={require('assets/img/search.png')} alt="error png" />
          </div>
        </div>
        <div className="list-item">
          <div className="container">
            <RenderItemList />
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  )
}
function RenderItemListOld() {
  const items = []
  for (var i = 0; i < 4; i++) {
    const itemRow = []
    for (var j = 0; j < 6; j++) {
      itemRow.push(
        <Item id={i * 6 + j} key={i * 6 + j} infor={Items[i * 6 + j]} />,
      )
    }
    items.push(
      <div className="row" key={i}>
        {itemRow}
      </div>,
    )
  }
  return items
}
function RenderItemList() {
  const refObj = useRef({
    weapon: 'weapon',
    head: 'outfit',
    face: 'outfit',
    clothes: 'outfit',
    wing: 'outfit',
    outfit: 'outfit',
    necklace: 'accessories',
    ring: 'accessories',
    bracer: 'accessories',
    treasure: 'accessories',
    badge: 'accessories',
    earrings: 'accessories',
    stone: 'materiral',
    forge: 'materiral',
    holy_light: 'materiral',
    mounts: 'pet',
    assistant: 'pet',
  })
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
  return (
    <div className="item col-6 col-sm-2" key={infor.id}>
      <Link className="wrapper" to={'/marketplace/' + infor.id}>
        <div className="title">
          <img src={require('assets/img/title.png')} alt="error png" />
          <span>ID: {infor.id}</span>
        </div>
        <div className="img">
          <img
            src={require(`assets/img/items/${infor.path}`)}
            alt="error png"
          />
        </div>
        <div className="name">{infor.name}</div>
        <div className="information">
          <div className="left">
            <div className="info-item">
              <label>Rarity: </label>
              <div>{infor.rarity}</div>
            </div>
            <div className="info-item">
              <label>Type: </label>
              <div>{infor.type}</div>
            </div>
          </div>
          <div className="right">
            <div className="info-item">
              <label>Date: </label>
              <div>29/5/2022</div>
            </div>
            {infor.type !== 'weapon' && (
              <div className="info-item">
                <label>Object: </label>
                <div>{type}</div>
              </div>
            )}
          </div>
        </div>
        <div className="price">
          <span className="img">
            <img src={require('assets/img/coin.png')} alt="error png" />
          </span>
          <span className="coin">380 SQF</span>
        </div>
        <div className="button">
          <button>Buy</button>
        </div>
      </Link>
    </div>
  )
}

export default MarketPlace
