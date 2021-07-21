import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    expenseData: [],
    userOptions: [],
    categoryOptions: ["food", "travel", "health", "supplies"],
    user_id: 1,
    category: "food"
  },
  reducers: {
    setUserId: (state, action) => {
      state.user_id = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setExpenseData: (state, action) => {
      state.expenseData = action.payload;
    },
    setUserOptions: (state, action) => {
      state.userOptions = action.payload;
    }
  }
});

export const { setExpenseData, setCategory, setUserId, setUserOptions } = expenseSlice.actions;

export default expenseSlice.reducer;
