import React from "react";
import Moment from "moment"
export default function ReadOnlyExpenseRow({
  expense,
  handleEditClick,
  handleDeleteClick
}) {
  return (
    <tr className="row_body">
      <td className="row_body_cell">{expense.cost}</td>
      <td className="row_body_cell">{Moment(expense.date).format("YYYY/MM/DD")}</td>
      <td className="row_body_cell">
        <button onClick={(e) => handleEditClick(e, expense)}>Edit</button>
        <button type="button" onClick={(e) => handleDeleteClick(e, expense.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}
