import React from 'react'
import "./App.scss"
import { useSelector } from 'react-redux'
import Card from './card/Card';
import Table from './table/Table';

export default function App() {
  // const data = useSelector(state => state.data)
  const userColumns = [
    {id: "user.firstName", value: "First Name"},
    {id: "user.lastName", value: "Last Name"},
    // {id: "totalExpense", value: "Total Expense"},
  ]
  return (
    <div className="app">
      {/* show firstname lastname and total expense */}
      <Card title={"Users"}>
        <Table columns={userColumns}/>
      </Card>
    </div>
  )
}
