import { createSlice } from "@reduxjs/toolkit";
import { dummy_data } from "../data/data";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: dummy_data
  },
  reducers: {
    setFirstName: (state, action) => {
      const { id, firstName } = action.payload;
      if (!id || !firstName) {
        return;
      }
      state.data = state.data.map((user) => {
        if (user.id === id) {
          user.firstName = firstName;
        }
        return user;
      });
    },
    setLastName: (state, action) => {
      const { id, lastName } = action.payload;
      if (!id || !lastName) {
        return;
      }
      state.data = state.data.map((user) => {
        if (user.id === id) {
          user.lastName = lastName;
        }
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
      const { id } = action.payload;
      state.data = state.data.map((user) => {
        if (user.id === id) return;
        return user;
      });
    },
    deleteRecord: (state, action) => {
      const { id, category, record_id } = action.payload;
      state.data = state.data.map((user) => {
        if (user.id === id) {
          user.category[category].map((record) => {
            if (record.id === record_id) return;
            return record;
          });
        }
        return user;
      });
    }
  }
});

export const {
  setFirstName,
  setLastName,
  setCategoryCost,
  setCategoryDate,
  deleteUser,
  deleteRecord
} = dataSlice.actions;

export default dataSlice.reducer;
