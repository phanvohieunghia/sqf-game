import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './style.scss'
import { showPopupSelector } from 'selectors'
import globalSilce from 'reducers/globalSlice'

const ComingSoon = () => {
  const state = useSelector(showPopupSelector)
  const dispatch = useDispatch()
  function closePopup() {
    const timeoutId = setTimeout(() => {
      dispatch(globalSilce.actions.showPopup(false))
      return () => clearTimeout(timeoutId)
    }, 1900)
  }

  return (
    <>
      {state && (
        <>
          <div id="popup-comingsoon">COMING SOON!</div>
          {closePopup()}
        </>
      )}
    </>
  )
}

export default memo(ComingSoon)
