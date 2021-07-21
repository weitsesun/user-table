import { configureStore } from '@reduxjs/toolkit'
import dataReducer from "../reducers/dataSlice"
import expenseReducer from "../reducers/expenseSlice"
import companyExpenseReducer from "../reducers/companyExpenseSlice"
export default configureStore({
  reducer: {
    data: dataReducer,
    expense: expenseReducer,
    companyExpense: companyExpenseReducer
  },
})