import React from "react";

export default function EditableUserRow({ user, editFormData, handleEditFormChange, handleDeleteClick }) {
  return (
    <tr className="row_body">
      <td className="row_body_cell">
        <input
          type="text"
          required="required"
          placeholder="First Name..."
          name="firstName"
          value={editFormData.firstName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="row_body_cell">
        <input
          type="text"
          required="required"
          placeholder="Last Name..."
          name="lastName"
          value={editFormData.lastName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="row_body_cell">{user.totalExpense}</td>
      <td className="row_body_cell">
        <button type="submit">Save</button>
        <button type="button" onClick={(e) => handleDeleteClick(e, user.id)}>Delete</button>
      </td>
    </tr>
  );
}
