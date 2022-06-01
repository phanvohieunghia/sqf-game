import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './style.scss'
import Icons from 'assets/icons'
import { connectWallet } from 'utils/connectWallet'
import { getBalance } from 'utils/Wallet'
import { checkSelector } from 'selectors'
import globalSlice from 'reducers/globalSlice'
import { handleTokenString, handleTokenAddressString } from 'components/common'

const Account = () => {
  const [account, setAccount] = useState(
    '0x0000000000000000000000000000000000000000',
  )
  const [balance, setBalance] = useState(0)
  const [availBalance, setAvailBalance] = useState(0)
  const [lockedBalance, setLockedBalance] = useState(0)

  useEffect(() => {
    async function load() {
      const account = await connectWallet()
      const balance = await getBalance()
      if (balance.balance && balance.availBalance) {
        const lockedToken = balance.balance - balance.availBalance
        setLockedBalance(lockedToken)
      }
      setAccount(account)
      setBalance(balance.balance)
      setAvailBalance(balance.availBalance)
    }
    load()
  }, [])

  const valuable = {
    address: account,
    reference_link: `https://www.sqfgame.com/${account}`,
  }
  // -------------------------------------
  const dispath = useDispatch()
  const stateCheck = useSelector(checkSelector)
  function handleCopyClipboard(type) {
    switch (type) {
      case 'address': {
        navigator.clipboard.writeText(
          'https://sqfgame.com/buy-token/' + valuable.address,
        )
        dispath(globalSlice.actions.toggleCheck('address'))
        const timeoutId = setTimeout(function () {
          dispath(globalSlice.actions.toggleCheck('address'))
          return clearTimeout(timeoutId)
        }, 2000)
        break
      }
      case 'reference_link': {
        navigator.clipboard.writeText(valuable.reference_link)
        dispath(globalSlice.actions.toggleCheck('reference_link'))
        const timeoutId = setTimeout(function () {
          dispath(globalSlice.actions.toggleCheck('reference_link'))
          return clearTimeout(timeoutId)
        }, 2000)
        break
      }
      default:
        new Error('Invalid clipboard')
    }
  }
  return (
    <div className="account container">
      <h3 className="primary-tex-yellow">My Wallet</h3>
      <div className="account-box wallet-box">
        <div className="item">
          <label>Balance:</label>
          <div className="content">
            <span className="number"> {balance} </span>
            <span className="unit">&nbsp;SQF</span>
          </div>
        </div>
        <div className="item">
          <label>Balance Available:</label>
          <div className="content">
            <span className="number"> {availBalance} </span>

            <span className="unit">&nbsp;SQF</span>
          </div>
        </div>
        <div className="item">
          <label>Locked Token:</label>
          <div className="content">
            <span className="number">{lockedBalance}</span>
            <span className="unit">&nbsp;SQF</span>
          </div>
        </div>
        <div className="item2" onClick={() => handleCopyClipboard('address')}>
          <label>Address:&nbsp;</label>
          <span className="text">{handleTokenString(valuable.address)}</span>
          <span className="icon">
            {!stateCheck.address && <Icons.Copy height={'20'} />}
            {stateCheck.address && <Icons.Check height={'20'} />}
          </span>
        </div>
        <div
          className="item2"
          onClick={() => handleCopyClipboard('reference_link')}
        >
          <label>Reference Link:&nbsp;</label>
          <span className="text">
            {/* {valuable.reference_link} */}
            {handleTokenAddressString(valuable.address)}
          </span>
          <span className="icon">
            {!stateCheck.reference_link && <Icons.Copy height={'20'} />}
            {stateCheck.reference_link && <Icons.Check height={'20'} />}
          </span>
        </div>
      </div>
      <h3 className="primary-tex-yellow">Activity History</h3>
      <div className="account-box">
        <div className="item">No data</div>
      </div>
      <h3 className="primary-tex-yellow">Buy Token History</h3>
      <div className="account-box">
        <div className="item">No data</div>
      </div>
    </div>
  )
}

export default Account
