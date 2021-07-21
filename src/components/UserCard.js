import React, { useState, useEffect } from "react";
import UserTable from "./table/UserTable";

export default function UserCard({ data = [] }) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData(
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
      <UserTable users={userData} setUserData={setUserData} />
    </div>
  );
}
