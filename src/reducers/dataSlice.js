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
    
    
    setCategoryCost: (state, action) => {
      const { id, category, record_id, cost } = action.payload;
      if (!id || !category || isNaN(cost)) {
        return;
      }
      state.data = state.data.map((user) => {
        if (user.id === id) {
          user.category[category].map((record) => {
            if (record.id === record_id) {
              record.cost = cost;
            }
            return record;
          });
        }
        return user;
      });
    },
    setCategoryDate: (state, action) => {
      const { id, category, record_id, date } = action.payload;
      if (!id || !category || !(isNaN(date) || date < 0)) {
        return;
      }
      state.data = state.data.map((user) => {
        if (user.id === id) {
          user.category[category].map((record) => {
            if (record.id === record_id) {
              record.date = date;
            }
            return record;
          });
        }
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
    deleteRecord: (state, action) => {
      const { id, category, record_id } = action.payload;
      state.data = state.data.map((user) => {
        if (user.id === id) {
          let targetIndex = -1;
          user.category[category].forEach((record, idx) => {
            if (record.id === record_id) {
              targetIndex = idx;
            }
          });
          if (targetIndex === -1) return user;
          user.category[category] = [
            ...user.category[category].slice(0, targetIndex),
            ...user.category[category].slice(
              targetIndex + 1,
              user.category[category].length
            )
          ];
        }
        return user;
      });
    }
  }
});

export const {
  setData,
  addNewUser,
  updateUser,
  calculateTotalExpenseForAll,
  setCategoryCost,
  setCategoryDate,
  deleteUser,
  deleteRecord,
} = dataSlice.actions;

export default dataSlice.reducer;
