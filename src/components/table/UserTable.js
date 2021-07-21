import React, { useState } from "react";
import "./Table.scss";
import { userTemplate } from "../../data/userTemplate";
import { useDispatch } from "react-redux";
import { addNewUser, updateUser, deleteUser } from "../../reducers/dataSlice";
import ReadOnlyUserRow from "./ReadOnlyUserRow";
import EditableUserRow from "./EditableUserRow";
import { v4 as uuidv4 } from "uuid";

export default function UserTable({ users, setUserData }) {
  const dispatch = useDispatch();
  const [addUserData, setAddUserData] = useState({
    firstName: "",
    lastName: ""
  });
  const [editContactId, setEditContactId] = useState();
  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: ""
  });
  function handleAddNewUserChange(e) {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newUserData = { ...addUserData };
    newUserData[fieldName] = fieldValue;
    setAddUserData(newUserData);
  }

  function handleEditFormChange(e) {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newEditData = { ...editFormData };
    newEditData[fieldName] = fieldValue;
    setEditFormData(newEditData);
  }

  function handleAddNewUserSubmit(e) {
    e.preventDefault();
    const newUser = {
      firstName: addUserData.firstName,
      lastName: addUserData.lastName
    };
    const newUsers = [...users, newUser];
    setUserData((prev) => newUsers);
    dispatch(addNewUser({ ...userTemplate, ...addUserData, id: uuidv4() }));
  }

  function handleEditClick(e, user) {
    e.preventDefault();
    setEditContactId(user.id);
    const formValue = {
      firstName: user.firstName,
      lastName: user.lastName
    };
    setEditFormData(formValue);
  }

  function handleDeleteClick(e, id) {
    e.preventDefault()
    dispatch(deleteUser(id));
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();
    dispatch(
      updateUser({
        id: editContactId,
        firstName: editFormData.firstName,
        lastName: editFormData.lastName
      })
    );
    setEditContactId(null);
  }

  return (
    <>
      <form onSubmit={handleEditFormSubmit}>
        <table className="table">
          <thead>
            <tr className="row_header">
              <th className="row_header_cell">First Name</th>
              <th className="row_header_cell">Last Name</th>
              <th className="row_header_cell">Total Expense</th>
              <th className="row_header_cell">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <>
                {editContactId === user.id ? (
                  <EditableUserRow
                    user={user}
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleDeleteClick={handleDeleteClick}
                  />
                ) : (
                  <ReadOnlyUserRow
                    user={user}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </>
            ))}
          </tbody>
        </table>
      </form>
      <h3>Add new user</h3>
      <form onSubmit={handleAddNewUserSubmit}>
        <input
          type="text"
          name="firstName"
          required="required"
          placeholder="First Name"
          onChange={handleAddNewUserChange}
        />
        <input
          type="text"
          name="lastName"
          required="required"
          placeholder="Last Name"
          onChange={handleAddNewUserChange}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
