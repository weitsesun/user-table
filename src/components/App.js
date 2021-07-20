import React, { useEffect } from "react";
import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import Card from "./card/Card";
import Table from "./table/Table";
import { setData, calculateTotalExpenseForAll,deleteUser } from "../reducers/dataSlice";

export default function App() {
  const data = useSelector((state) => state.data.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalExpenseForAll());
    dispatch(deleteUser(1));
  }, []);

  const userColumns = [
    { id: "firstName", value: "First Name" },
    { id: "lastName", value: "Last Name" },
    { id: "totalExpense", value: "Total Expense" }
  ];
  return (
    <div className="app">
      {/* {JSON.stringify(data)} */}
      {/* show firstname lastname and total expense */}
      <Card title={"Users"}>
        <Table columns={userColumns} />
      </Card>
    </div>
  );
}
