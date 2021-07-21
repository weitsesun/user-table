import React, { useState, useEffect } from "react";
import Table from "./table/Table";
import UserTable from "./table/UserTable";
import { useDispatch } from "react-redux";
import { setData } from "../reducers/dataSlice";
import { userTemplate } from "../data/userTemplate";

export default function UserCard({ data = [] }) {
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();

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

  // useEffect(() => {
  //   dispatch(setData({...userTemplate, ...userData}))
  // }, [userData])

  return (
    <div className="card">
      <h1 className="title">Users</h1>
      <UserTable users={userData} setUserData={setUserData} />
    </div>
  );
}
