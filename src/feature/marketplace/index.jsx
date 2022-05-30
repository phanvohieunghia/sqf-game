// import { Link } from 'react-router-dom'
import React, { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'

// MUI
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

import './style.scss'
import Pagination from 'components/pagination'
import Icons from 'assets/icons'
import Items from 'assets/data/items.json'
import detailPopupSlice from 'components/popup/detail/slice'
import Popup from 'components/popup/comingsoon'

const MarketPlace = () => {

   // Handle Modal Nav Moible
    const [stateNav, setStateNav] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    }); 

    const modalCartNav = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawerNav(anchor, false)}
          onKeyDown={toggleDrawerNav(anchor, false)}
        >
            <div>
                <div className="cart-title">
                    <div className=" nav-logo">
                       <img src="/images/logo.png" alt="" />
                    </div>
                    <div className="cart-title-close">
                        <button className="clear-btn">
                            <i className="fa-solid fa-circle-xmark"></i>
                        </button>
                    </div>
                </div>
            </div>
            <Divider />
            <div className="tempty-title" >
                <a href="https://google.com" className="nav-item">
                    <div className="nav-item-name active" >
                        Home
                    </div>
                </a>
            </div>

            <div className="tempty-title" >
                <a href="https://google.com" className="nav-item">
                    <div className="nav-item-name" >
                        Marketplace
                    </div>
                </a>
            </div>

             <div className="tempty-title" >
                <a href="https://google.com" className="nav-item">
                    <div className="nav-item-name" >
                        Whitepaper
                    </div>
                </a>
            </div>

            {/* <div className="tempty-title" >
                <a href="https://google.com" className="nav-item">
                    <div className="nav-item-name">
                        News
                    </div>
                </a>
            </div> */}

            <div className="tempty-title">
                <a href="https://google.com" className="nav-item">
                    <div className="nav-item-name">
                        Event
                    </div>
                </a>
            </div>

            <div className="tempty-title">
                <a href="https://google.com" className="nav-item">
                    <div className="nav-item-name">
                        Sign up
                    </div>
                </a>
            </div>

            <div className="tempty-title">
                <a href="https://google.com" className="nav-item">
                    <div className="nav-item-name nav-item-name--primary">
                        Play Game
                    </div>
                </a>
            </div>

            <div className="tempty-title">
                <a href="https://google.com" className="nav-item">
                    <div className="nav-item-name nav-item-name--primary">
                        Wallet Connect
                    </div>
                </a>
            </div>
        </Box>
    );

    const toggleDrawerNav = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setStateNav({ ...stateNav, [anchor]: open });
    };

  return (
    <div id="marketplace">
      <div className="main">

        {/* Modal Nav Mobile Menu*/}
        <Drawer
            anchor={'left'}
            open={stateNav['left']}
            onClose={toggleDrawerNav('left', false)}
        >
            {modalCartNav('left')}
        </Drawer>

        <div className="summary container">
          <div className="row">
            <div className="col-xl-6 col-12">
              <div className="d-flex container justify-content-center">
                <div className="item cart-title">
                  <span className="img">
                    <img src={require('assets/img/summary.png')} alt="error png" />
                  </span>
                  <span className="infor">
                    <h4>Total volume</h4>
                    <span className="primary-tex-yellow">161284</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-12">
              <div className="d-flex container justify-content-center">
               <div className="item cart-title">
                  <span className="img">
                    <img src={require('assets/img/summary.png')} alt="error png" />
                  </span>
                  <span className="infor">
                    <h4>MSP price</h4>
                    <span className="primary-tex-yellow">
                      0.18 
                    </span>
                    <span>BUSD</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="filter">
          <div className="filter-title primary-tex-gray font-weight-700 font-size-18" onClick={toggleDrawerNav('left', true)}>
            Filter
          </div>
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
  const itemRef = useRef(null)
  const dispatch = useDispatch()
  function handleDetailPopup() {
    dispatch(detailPopupSlice.actions.showPopup(infor))
  }
  useEffect(() => {
    itemRef.current.parentElement.setAttribute('data-after', infor.name)
  })
  return (
    <div className="item col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2" key={infor.id}>
      {/* <Link className="wrapper" to={'/marketplace/' + infor.id}> */}
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
          <span className="coin">380 SQF</span>
        </div>
        <div className="button">
          <button>
            <Popup />
            Buy
          </button>
        </div>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default MarketPlace
