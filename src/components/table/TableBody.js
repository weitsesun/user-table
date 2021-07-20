import React from "react";
import { useSelector } from "react-redux";
import { get } from "lodash";

export default function TableBody({ columns }) {
  const data = useSelector((state) => state.data.data);
  /**
    const userColumns = [
      {id: "firstName", value: "First Name"},
      {id: "lastName", value: "Last Name"},
      {id: "totalExpense", value: "Total Expense"},
    ]
   */
  /**
    const categoryColumns = [
      {id: "category.something", value: "First Name"},
      {id: "lastName", value: "Last Name"},
      {id: "totalExpense", value: "Total Expense"},
    ]
   */
  // function parseDataByColumnId(id) {

  // }

  function renderCell(id, item) {
    return <td className="row_body_cell">{get(item, id, void 0)}</td>;
  }

  function renderRow(item) {
    return (
      <tr
        className="row_body"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns.length}, 1fr)`
        }}
      >
        {columns.map((column) => renderCell(column.id, item))}
      </tr>
    );
  }

  return <tbody>{data && data.map(renderRow)}</tbody>;
}
