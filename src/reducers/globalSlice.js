import { createSlice } from '@reduxjs/toolkit'

const globalSlide = createSlice({
  name: 'global',
  initialState: {
    menuMobile: false,
    ComingSoonPopup: false,
    detailPopup: false,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.menuMobile = action.payload
    },
    showPopup: (state, action) => {
      state.ComingSoonPopup = action.payload
    },
    showDetailPopup: (state, action) => {
      state.detailPopup = action.payload
    }
  },
})
export default globalSlide
