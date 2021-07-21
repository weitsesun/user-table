import { createSlice } from "@reduxjs/toolkit";
const categoryOptions = [
  { id: "food", value: "food" },
  { id: "travel", value: "travel" },
  { id: "health", value: "health" },
  { id: "supplies", value: "supplies" }
];
export const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    expenseData: [],
    userOptions: [],
    categoryOptions,
    id: "1",
    category: "food"
  },
  reducers: {
    setUserId: (state, action) => {
      state.id = action.payload;
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

export const { setExpenseData, setCategory, setUserId, setUserOptions } =
  expenseSlice.actions;

export default expenseSlice.reducer;
