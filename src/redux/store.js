import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './projectSlice'

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
})
