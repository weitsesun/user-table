import React from "react";
import Moment from "moment";
export default function EditableExpenseRow({
  expense,
  editFormData,
  handleEditFormChange,
  handleDeleteClick
}) {
  return (
    <tr className="row_body">
      <td className="row_body_cell">
        <input
          type="text"
          required="required"
          placeholder="Cost..."
          name="cost"
          value={editFormData.cost}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="row_body_cell">
        <input
          type="date"
          required="required"
          placeholder="Date..."
          name="date"
          value={editFormData.date}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="row_body_cell">
        <button type="submit">Save</button>
        <button type="button" onClick={(e) => handleDeleteClick(e, expense.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}
