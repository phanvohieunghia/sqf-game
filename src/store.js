import { configureStore } from '@reduxjs/toolkit'
import globalSlice from 'reducers/globalSlice'

const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
  }
})
export default store