import React, { useState, useEffect } from "react";
import CompanyExpenseTable from "../table/CompanyExpenseTable";
import UserTable from "../table/UserTable";

export default function CompanyExpenseCard({ data = [] }) {
  const [companyExpenseData, setCompanyExpenseData] = useState([]);

  useEffect(() => {
  }, [data]);

  return (
    <div className="card">
      <h1 className="title">Company Expense</h1>
      <CompanyExpenseTable companyExpenseData={companyExpenseData}/>
      {/* <UserTable users={companyExpenseData} setUserData={setCompanyExpenseData} /> */}
    </div>
  );
}
