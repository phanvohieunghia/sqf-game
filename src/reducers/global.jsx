import { createSlice } from '@reduxjs/toolkit'

const globalSlide = createSlice({
  name: 'global',
  initialState: {
    toggle: true,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.toggle = action.payload
    },
  },
})
export default globalSlide
