import React, { useEffect, useState } from "react";
import "./App.scss";
import "./Card.scss";
import UserCard from "./UserCard";
import ExpenseCard from "./ExpenseCard";

import { useSelector, useDispatch } from "react-redux";

import {
  calculateTotalExpenseForAll,
} from "../reducers/dataSlice";

export default function App() {
  const { data } = useSelector((state) => state.data);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalExpenseForAll());
  }, []);

  return (
    <div className="app">
      <UserCard data={data} />
      <ExpenseCard data={data} />
    </div>
  );
}
