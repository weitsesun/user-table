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
    },
    changeDateByRecordId: (state, action) => {
      const { id, date } = action.payload;
      state.expenseData = state.expenseData.map((record) => {
        if (record.id === id) {
          record = { ...record, date: new Date(date).valueOf() };
        }
        return record;
      });
    },
    changeCostByRecordId: (state, action) => {
      const { id, cost } = action.payload;
      state.expenseData = state.expenseData.map((record) => {
        if (record.id === id) {
          record = { ...record, cost };
        }
        return record;
      });
    }
  }
});

export const {
  setExpenseData,
  setCategory,
  setUserId,
  setUserOptions,
  changeDateByRecordId,
  changeCostByRecordId
} = expenseSlice.actions;

export default expenseSlice.reducer;
