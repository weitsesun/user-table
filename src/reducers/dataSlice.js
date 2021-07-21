import { createSlice } from "@reduxjs/toolkit";
import { dummy_data } from "../data/data";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: dummy_data
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    addNewUser: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    updateUser:(state, action) => {
      const {id, firstName, lastName} = action.payload;
      state.data = state.data.map(user => {
        if(user.id === id) {
          user.firstName = firstName;
          user.lastName = lastName;
        }
        return user;
      })
    },
    calculateTotalExpenseForAll: (state) => {
      const allCate = state.data.map((user) => user.category);
      const allCost = allCate.map((item) =>
        Object.keys(item).map((key) =>
          item[key].reduce((acc, record) => (acc += Number(record.cost)), 0)
        )
      );
      const expenseRecords = allCost.map(
        (costs) => costs.reduce((acc, cost) => (acc += cost)),
        0
      );
      state.data = state.data.map((user, idx) => {
        user["totalExpense"] = expenseRecords[idx];
        return user;
      });
    },
    
    deleteUser: (state, action) => {
      const id = action.payload;
      let targetIndex = -1;
      state.data.forEach((user, idx) => {
        if (user.id === id) targetIndex = idx;
      });
      if (targetIndex === -1) return;
      state.data = [
        ...state.data.slice(0, targetIndex),
        ...state.data.slice(targetIndex + 1, state.data.length)
      ];
    },
  }
});

export const {
  setData,
  addNewUser,
  updateUser,
  deleteUser,
  calculateTotalExpenseForAll,
} = dataSlice.actions;

export default dataSlice.reducer;
