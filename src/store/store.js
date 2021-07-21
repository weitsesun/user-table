import { configureStore } from '@reduxjs/toolkit'
import dataReducer from "../reducers/dataSlice"
import expenseReducer from "../reducers/expenseSlice"
export default configureStore({
  reducer: {
    data: dataReducer,
    expense: expenseReducer
  },
})