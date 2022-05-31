import React, { useEffect, useState } from 'react'
import './style.scss'
import Popup from 'components/popup/comingsoon'
import { Link } from 'react-router-dom'
import { connectWallet } from 'utils/connectWallet'
import { getBalance } from 'utils/Wallet'
import Popup from 'components/popup/comingsoon-old'

const Header = () => {
  const [account,setAccount] = useState(false);
  const [balanceToken, setBalanceToken] = useState(0);
  const [balanceBUSD, setBalanceBUSD] = useState(0);

  
  useEffect(() => {
    async function load() {
      const account = await connectWallet();
      const balance = await getBalance();
      console.log('xxsaf',balance);
      if(balance.balanceBUSD && balance.availBalance) { 
        setBalanceBUSD(balance.balanceBUSD);
        setBalanceToken(balance.availBalance);
      }
      setAccount(account);
    }
    load();
  }, []);


  return (
    <header>
      <div className="hd-items">
        <div className="item">
          <img src={require('assets/img/coin.png')} alt="error png" />
          <span className="primary-tex-yellow font-weight-700">{balanceToken}</span>
        </div>
        <div className="item">
          <img src={require('assets/img/coin2.png')} alt="error png" />
          <span className="primary-tex-yellow font-weight-700">{balanceBUSD}</span>
        </div>
      </div>
      {
        account 
        ? 
        <a href="/" className="account">
          <Popup />
        </a>
        :
        <a href="/" className="button">
          {/* <Popup /> */}
        </a>
      }
    </header>
  )
}

export default Header
