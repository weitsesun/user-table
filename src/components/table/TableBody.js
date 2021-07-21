import React from "react";
import { useSelector } from "react-redux";
import { get } from "lodash";

export default function TableBody({ data, columns }) {
  // const { data } = useSelector((state) => state.data);
  // const parsedData = data.map(user => get(user, columns.map(c =), void 0))
  // console.log(parsedData)
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
    return (
      <td key={Math.random()} className="row_body_cell">
        {get(item, id, void 0)}
      </td>
    );
  }

  function renderRow(item) {
    return (
      <tr
        key={Math.random()}
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

  return <tbody>{data && data.map((user) => renderRow(user))}</tbody>;
}
