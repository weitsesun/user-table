import { createSlice } from "@reduxjs/toolkit";

export const companyExpenseSlice = createSlice({
  name: "companyExpense",
  initialState: {
    companyExpenseData: []
  },
  reducers: {
    setCompanyExpenseData: (state, action) => {
      state.companyExpenseData = action.payload;
    }
  }
});

export const { setCompanyExpenseData } = companyExpenseSlice.actions;

export default companyExpenseSlice.reducer;
