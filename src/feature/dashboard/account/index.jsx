import React, { useState, useEffect } from 'react'

import './style.scss'
import Icons from 'assets/icons'
import { connectWallet } from 'utils/connectWallet';
import { getBalance } from 'utils/Wallet';

const Account = () => {
  const [copied,setCopied] = useState(false);
  const [account,setAccount] = useState("0x0000000000000000000000000000000000000000");
  const [balance,setBalance] = useState(0);
  const [availBalance,setAvailBalance] = useState(0);
  const [lockedBalance,setLockedBalance] = useState(0);

  useEffect(() => {
    async function load() {
      const account = await connectWallet();
      const balance = await getBalance();
      if(balance.balance && balance.availBalance)  { 
        const lockedToken = balance.balance - balance.availBalance;
        setLockedBalance(lockedToken);
      }
      setAccount(account);
      setBalance(balance.balance);
      setAvailBalance(balance.availBalance);

    }
    load();
  }, []);

  const valuable = {
    address: account,
    reference_link: `https://www.sqfgame.com/${account}`,
  }

  useEffect(() => {
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }, [copied])

  function handleClipBoard(type) {
    switch (type) {
      case 'address':
        navigator.clipboard.writeText(
          'https://sqfgame.com/buy-token/' + valuable.address,
        )
        break
      case 'reference_link':
        navigator.clipboard.writeText(valuable.reference_link)
        break
    }
    setCopied(true)
  }
  return (
    <div className="account">
      <div className="container">
        <h3 className="primary-tex-yellow">My Wallet</h3>
        <div className="content">
          <div className="content-wrap">

            {/* <div className="item">
              <label>Total token buy:</label>
              <div className="item-content">
                <span className="primary-tex-yellow">0</span>
                <span className="unit primary-tex-gray"> SQF</span>
              </div>
            </div> */}

            <div className="item">
              <label>Balance:</label>
              <div className="item-content">
                <span className="primary-tex-yellow"> {balance} </span>
                <span className="unit primary-tex-gray"> SQF</span>  
              </div>
            </div>

            <div className="item">
              <label>Balance Available:</label>
              <div className="item-content">
                <span className="primary-tex-yellow"> {availBalance} </span>
                <span className="unit primary-tex-gray"> SQF</span>  
              </div>
            </div>

            <div className="item">
              <label>Locked Token:</label>
              <div className="item-content">
                <span className="primary-tex-yellow">{lockedBalance}</span>
                <span className="unit primary-tex-gray">SQF</span>  
              </div>
            </div>


            <div className="item2">
              <label>Address:</label>
              <span className="primary-tex-yellow ml-10 ref">
                {valuable.address}
              </span>
              <span
                className="btn-copy"
                onClick={() => handleClipBoard('address')}
              >
                <Icons.Copy height={'20'} />
              </span>
            </div>

            <div className="item2">
              <label>Reference Link:</label>
              <span className="primary-tex-yellow ml-10">
                {valuable.reference_link}
              </span>
              <span
                className="btn-copy"
                onClick={() => handleClipBoard('reference_link')}
              >
                <Icons.Copy height={'20'} />
              </span>
            </div>
          </div>
        </div>
        <h3 className="primary-tex-yellow">Activity History</h3>
        <div className="content">
          <div className="item">No data</div>
        </div>
        <h3 className="primary-tex-yellow">Buy Token History</h3>
        <div className="content">
          <div className="item">No data</div>
        </div>
        {copied && (
          <div className="popup-copied">
            <div className="popup-copied-wrap">COPIED!</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Account
