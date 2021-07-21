import React, { useEffect } from "react";
import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import Card from "./card/Card";
import Table from "./table/Table";
import { calculateTotalExpenseForAll } from "../reducers/dataSlice";
import {
  setExpenseData,
  setUserOptions,
  setUserId,
  setCategory
} from "../reducers/expenseSlice";

export default function App() {
  const { data } = useSelector((state) => state.data);
  const { userOptions } = useSelector((state) => state.expense);
  const { expenseData, categoryOptions, user_id, category } = useSelector(
    (state) => state.expense
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalExpenseForAll());
  }, []);

  useEffect(() => {
    data.forEach((user) => {
      if (user.user_id === user_id) {
        const newExpData = user.category[category].map((record) => ({
          user_id,
          fullName: `${user.firstName} ${user.lastName}`,
          category,
          ...record
        }));
        dispatch(setExpenseData(newExpData));
      }
    });
    const newUserOptions = data.map((user) => ({
      id: user.user_id,
      value: `${user.firstName} ${user.lastName}`
    }));
    dispatch(setUserOptions(newUserOptions));
  }, [data, user_id, category]);

  const userColumns = [
    { id: "firstName", value: "First Name" },
    { id: "lastName", value: "Last Name" },
    { id: "totalExpense", value: "Total Expense" }
  ];

  const expenseColumns = [
    { id: "cost", value: "Cost" },
    { id: "date", value: "Date" }
  ];

  const expenseOptions = [
    {
      title: "Name",
      options: userOptions,
      onChange: (e) => {
        dispatch(setUserId(e?.target?.value));
      },
      value: user_id
    },
    {
      title: "Category",
      options: categoryOptions,
      onChange: (e) => dispatch(setCategory(e?.target?.value)),
      value: category
    }
  ];

  return (
    <div className="app">
      <Card title={"Users"}>
        <Table data={data} columns={userColumns} />
      </Card>
      <Card title={"Expense"} options={expenseOptions}>
        <Table data={expenseData} columns={expenseColumns} />
      </Card>
    </div>
  );
}
