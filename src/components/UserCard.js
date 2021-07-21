import React, { useState, useEffect } from "react";
import Table from "./table/Table";
import UserTable from "./table/UserTable";

export default function UserCard({ data = [] }) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData(
      data.map((user) => ({
        firstName: user?.firstName,
        lastName: user?.lastName,
        totalExpense: user?.totalExpense
      }))
    );
  }, [data]);

  const columns = [
    {
      id: "firstName",
      value: "First Name",
      disabled: false,
      type: "text"
    },
    {
      id: "lastName",
      value: "Last Name",
      disabled: false,
      type: "text"
    },
    {
      id: "totalExpense",
      value: "Total Expense",
      disabled: true,
      type: "number"
    }
  ];

  return (
    <div className="card">
      <h1 className="title">Users</h1>
      <UserTable data={userData} columns={columns}/>
    </div>
  );
}
