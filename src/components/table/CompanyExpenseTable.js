import React from "react";
import "./Table.scss";

export default function CompanyExpenseTable({
  companyExpenseData = []
}) {
  return (
    <table className="table">
      <thead>
        <tr className="row_header">
          <th className="row_header_cell">Category</th>
          <th className="row_header_cell">Total Cost</th>
        </tr>
      </thead>
      <tbody>
        {companyExpenseData.map((expense) => (
          <tr className="row_body">
            <td className="row_body_cell">{expense.category}</td>
            <td className="row_body_cell">{expense.cost}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
