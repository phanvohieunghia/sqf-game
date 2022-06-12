import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './style.scss'
import Icons from 'assets/icons'
import { checkSelector } from 'selectors'
import globalSlice from 'reducers/globalSlice'
import { handleTokenAddressString } from 'components/common'

const Account = () => {
  // -------------------------------------
  const dispath = useDispatch()
  const stateCheck = useSelector(checkSelector)
  function handleCopyClipboard(type) {
    switch (type) {
      case 'address': {
        navigator.clipboard.writeText('https://sqfgame.com/buy-token/00000')
        dispath(globalSlice.actions.toggleCheck('address'))
        const timeoutId = setTimeout(function () {
          dispath(globalSlice.actions.toggleCheck('address'))
          return clearTimeout(timeoutId)
        }, 2000)
        break
      }
      case 'reference_link': {
        navigator.clipboard.writeText('https')
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
            <span className="number"> 0 </span>
            <span className="unit">&nbsp;SQF</span>
          </div>
        </div>
        <div className="item">
          <label>Balance Available:</label>
          <div className="content">
            <span className="number"> 0 </span>

            <span className="unit">&nbsp;SQF</span>
          </div>
        </div>
        <div className="item">
          <label>Locked Token:</label>
          <div className="content">
            <span className="number">0</span>
            <span className="unit">&nbsp;SQF</span>
          </div>
        </div>
        <div className="item2" onClick={() => handleCopyClipboard('address')}>
          <label>Address:&nbsp;</label>
          <span className="text"> 0</span>
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
          <span className="text">x</span>
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
