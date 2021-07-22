import React from "react";

export default function ReadOnlyUserRow({
  user,
  handleEditClick,
  handleDeleteClick
}) {
  return (
    <tr className="row_body">
      <td className="row_body_cell">{user.firstName}</td>
      <td className="row_body_cell">{user.lastName}</td>
      <td className="row_body_cell">{user.totalExpense}</td>
      <td className="row_body_cell">
        <button onClick={(e) => handleEditClick(e, user)}>Edit</button>
        <button type="button" onClick={(e) => handleDeleteClick(e, user.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}
