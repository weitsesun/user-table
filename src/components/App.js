import React, { useEffect } from "react";
import "./App.scss";
import "./card/Card.scss";
import UserCard from "./card/UserCard";
import ExpenseCard from "./card/ExpenseCard";

import { useSelector, useDispatch } from "react-redux";

import { calculateTotalExpenseForAll } from "../reducers/dataSlice";
import CompanyExpenseCard from "./card/CompanyExpenseCard";

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
      <CompanyExpenseCard data={data} />
    </div>
  );
}
