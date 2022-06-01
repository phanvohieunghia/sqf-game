import { createSlice } from '@reduxjs/toolkit'

const globalSlide = createSlice({
  name: 'global',
  initialState: {
    menuMobile: false,
    ComingSoonPopup: false,
    detailPopup: false,
    check: {
      address: false,
      reference_link: false
    },
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
    },
    toggleCheck: (state, action) => {
      switch (action.payload) {
        case "address": {
          state.check.address = !state.check.address
          break

        }
        case "reference_link":
          state.check.reference_link = !state.check.reference_link
          break
        default:
          return state
      }
    }
  },
})
export default globalSlide
