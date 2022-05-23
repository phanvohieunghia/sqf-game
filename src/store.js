import { configureStore } from '@reduxjs/toolkit'
import globalReducer from 'reducers/global'

const store = configureStore({
  reducer: {
    global: globalReducer.reducer,
  }
})
export default store