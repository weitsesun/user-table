import React, { useState, useEffect } from "react";
import CompanyExpenseTable from "../table/CompanyExpenseTable";

export default function CompanyExpenseCard({ data = [] }) {
  const [companyExpenseData, setCompanyExpenseData] = useState([]);

  // parseData to => [{category: "food", cost: 123}, {category: "health", cost: 123...}]
  useEffect(() => {
    
  }, [data]);

  return (
    <div className="card">
      <h1 className="title">Company Expense</h1>
      <CompanyExpenseTable companyExpenseData={companyExpenseData}/>
    </div>
  );
}
