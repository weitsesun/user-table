import React, { useState, useEffect } from "react";
import UserTable from "./table/UserTable";

export default function ExpenseCard({ data = [] }) {
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    setExpenseData(
      data.map((user) => ({
        id: user?.id,
        firstName: user?.firstName,
        lastName: user?.lastName,
        totalExpense: user?.totalExpense
      }))
    );
  }, [data]);

  return (
    <div className="card">
      <h1 className="title">Users</h1>
      <UserTable users={expenseData} setUserData={setExpenseData} />
    </div>
  );
}
