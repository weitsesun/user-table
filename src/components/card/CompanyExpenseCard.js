import React, { useState, useEffect } from "react";
import CompanyExpenseTable from "../table/CompanyExpenseTable";

export default function CompanyExpenseCard({ data = [] }) {
  const [companyExpenseData, setCompanyExpenseData] = useState([]);

  // parseData to => [{category: "food", cost: 123}, {category: "health", cost: 123...}]
  useEffect(() => {
    const category = ["food", "travel", "health", "supplies"];
    const TotalData = { food: 0, travel: 0, health: 0, supplies: 0 };

    data.forEach((user) => {
      category.forEach((category) => {
        let costOnCategory = user.category[category].reduce((acc, record) => {
          return (acc += Number(record.cost));
        }, 0);
        TotalData[category] =
          Number(TotalData[category]) + Number(costOnCategory);
      });
    });

    const newCompanyExpenseData = Object.entries(TotalData).map(
      ([key, value]) => ({
        category: key,
        cost: value
      })
    );
    setCompanyExpenseData(newCompanyExpenseData);
  }, [data]);

  return (
    <div className="card">
      <h1 className="title">Company Expense</h1>
      <CompanyExpenseTable companyExpenseData={companyExpenseData} />
    </div>
  );
}
