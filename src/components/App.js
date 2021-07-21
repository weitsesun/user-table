import React, { useEffect } from "react";
import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import Card from "./card/Card";
import Table from "./table/Table";
import {
  calculateTotalExpenseForAll,
  setFirstName,
  setLastName,
  setDataCategory
} from "../reducers/dataSlice";
import { setCompanyExpenseData } from "../reducers/companyExpenseSlice";
import {
  setExpenseData,
  setUserOptions,
  setUserId,
  setCategory,
  changeDateByRecordId,
  changeCostByRecordId
} from "../reducers/expenseSlice";

export default function App() {
  const { data } = useSelector((state) => state.data);
  const { companyExpenseData } = useSelector((state) => state.companyExpense);
  const { userOptions, expenseData, categoryOptions, id, category } =
    useSelector((state) => state.expense);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalExpenseForAll());
  }, []);

  useEffect(() => {
    data.forEach((user) => {
      if (user.id === id) {
        const newExpData = user.category[category].map((record) => ({
          user_id: id,
          fullName: `${user.firstName} ${user.lastName}`,
          category,
          ...record
        }));
        dispatch(setExpenseData(newExpData));
      }
    });
    const newUserOptions = data.map((user) => ({
      id: user.id,
      value: `${user.firstName} ${user.lastName}`
    }));
    dispatch(setUserOptions(newUserOptions));
  }, [data, id, category]);

  useEffect(() => {
    const category = ["food", "travel", "health", "supplies"];
    data.forEach((user) => {
      if (user.id === id) {
        const newCompanyExpenseData = category.map((category) => ({
          category,
          cost: user.category[category].reduce(
            (acc, item) => (acc += Number(item.cost)),
            0
          )
        }));
        dispatch(setCompanyExpenseData(newCompanyExpenseData));
      }
    });
  }, [data, id]);

  useEffect(() => {
    dispatch(setDataCategory(id, category, expenseData));
  }, []);

  const expenseOptions = [
    {
      title: "Name",
      options: userOptions,
      onChange: (e) => {
        dispatch(setUserId(e?.target?.value));
      },
      value: id
    },
    {
      title: "Category",
      options: categoryOptions,
      onChange: (e) => dispatch(setCategory(e?.target?.value)),
      value: category
    }
  ];

  const companyExpenseColumns = [
    { id: "category", value: "Category", disabled: true, type: "text" },
    { id: "cost", value: "Cost", disabled: true, type: "number" }
  ];

  const userColumns = [
    {
      id: "firstName",
      value: "First Name",
      disabled: false,
      type: "text",
      onChange: (id, firstName) => {
        dispatch(setFirstName({ id, firstName }));
      }
    },
    {
      id: "lastName",
      value: "Last Name",
      disabled: false,
      type: "text",
      onChange: (id, lastName) => {
        dispatch(setLastName({ id, lastName }));
      }
    },
    {
      id: "totalExpense",
      value: "Total Expense",
      disabled: true,
      type: "number"
    }
  ];

  const expenseColumns = [
    {
      id: "cost",
      value: "Cost",
      disabled: false,
      type: "number",
      onChange: (id, cost) => {
        dispatch(changeCostByRecordId({ id, cost }));
      }
    },
    {
      id: "date",
      value: "Date",
      disabled: false,
      type: "text",
      onChange: (id, date) => {
        dispatch(changeDateByRecordId({ id, date }));
      }
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
      <Card title={"Company Expense"}>
        <Table data={companyExpenseData} columns={companyExpenseColumns} />
      </Card>
    </div>
  );
}
