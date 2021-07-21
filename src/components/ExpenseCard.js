import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ExpenseTable from "./table/ExpenseTable";

export default function ExpenseCard({ data = [] }) {
  const [expenseData, setExpenseData] = useState([]);
  const [userOptions, setUserOptions] = useState([]);
  const [selectUserId, setSelectedUserId] = useState("1");
  const [selectCategory, setSelectCategory] = useState("food");

  useEffect(() => {
    setUserOptions(
      data.map((user) => ({
        id: user.id,
        value: `${user.firstName} ${user.lastName}`
      }))
    );
  }, [data]);

  useEffect(() => {
    let newExpenseData = [];
    data.forEach((user) => {
      if (user.id === selectUserId) {
        newExpenseData = user.category[selectCategory];
      }
    });
    setExpenseData(newExpenseData);
  }, [selectCategory, selectUserId]);

  function handleSelectUserChange(e) {
    e.preventDefault();
    setSelectedUserId(e.target.value);
  }
  function handleSelectCategoryChange(e) {
    e.preventDefault();
    setSelectCategory(e.target.value);
  }
  const categoryOptions = ["food", "supplies", "travel", "health"];

  return (
    <div className="card">
      <h1 className="title">Expense</h1>
      <div className="option-container" key={uuidv4()}>
        <label htmlFor={"user"}>User</label>
        <select onChange={handleSelectUserChange} value={selectUserId}>
          {userOptions.map((option) => (
            <option key={uuidv4()} value={option.id}>
              {option.value}
            </option>
          ))}
        </select>
        <label htmlFor={"category"}>Category</label>
        <select onChange={handleSelectCategoryChange} value={selectCategory}>
          {categoryOptions.map((category) => (
            <option key={uuidv4()} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <ExpenseTable
        expenseData={expenseData}
        setExpenseData={setExpenseData}
        selectUserId={selectUserId}
        selectCategory={selectCategory}
      />
    </div>
  );
}
