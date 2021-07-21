import React, { useState } from "react";
import "./Table.scss";
import { userTemplate } from "../../data/userTemplate";
import { useDispatch } from "react-redux";
import { addNewUser, updateUser, deleteUser } from "../../reducers/dataSlice";
import ReadOnlyUserRow from "./ReadOnlyUserRow";
import EditableUserRow from "./EditableUserRow";
import { v4 as uuidv4 } from "uuid";
import ReadOnlyExpenseRow from "./ReadOnlyExpenseRow";

export default function ExpenseTable({ expenseData, setExpenseData }) {
  // const dispatch = useDispatch();
  const [addExpenseData, setAddExpenseData] = useState({
    cost: "",
    date: ""
  });
  const [editContactId, setEditContactId] = useState();
  const [editFormData, setEditFormData] = useState({
    cost: "",
    date: ""
  });
  function handleAddNewExpenseChange(e) {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newUserData = { ...addExpenseData };
    newUserData[fieldName] = fieldValue;
    setAddExpenseData(newUserData);
  }

  // function handleEditFormChange(e) {
  //   e.preventDefault();
  //   const fieldName = e.target.getAttribute("name");
  //   const fieldValue = e.target.value;
  //   const newEditData = { ...editFormData };
  //   newEditData[fieldName] = fieldValue;
  //   setEditFormData(newEditData);
  // }

  function handleAddNewCostSubmit(e) {
    e.preventDefault();
    const newExpense = {
      cost: addExpenseData.cost,
      date: addExpenseData.date
    };
    const newExpenses = [...expenseData, newExpense];
    setExpenseData((prev) => newExpenses);
    // dispatch(addNewUser({ ...userTemplate, ...addUserData, id: uuidv4() }));
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
    console.log(id);
    // dispatch(deleteUser(id));
  }

  // function handleEditFormSubmit(e) {
  //   e.preventDefault();
  //   dispatch(
  //     updateUser({
  //       id: editContactId,
  //       firstName: editFormData.firstName,
  //       lastName: editFormData.lastName
  //     })
  //   );
  //   setEditContactId(null);
  // }

  return (
    <>
      {/* <form onSubmit={handleEditFormSubmit}> */}
      <form>
        <table className="table">
          <thead>
            <tr className="row_header">
              <th className="row_header_cell">Cost</th>
              <th className="row_header_cell">Date</th>
              <th className="row_header_cell">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenseData.map((expense) => (
              <>
                <ReadOnlyExpenseRow expense={expense} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>
              </>
            ))}
            {/* {users.map((user) => (
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
            ))} */}
          </tbody>
        </table>
      </form>
      <h3>Add new expense</h3>
      <form onSubmit={handleAddNewCostSubmit}>
        <input
          type="text"
          name="cost"
          required="required"
          placeholder="Cost"
          onChange={handleAddNewExpenseChange}
        />
        <input
          type="text"
          name="date"
          required="required"
          placeholder="Date"
          onChange={handleAddNewExpenseChange}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
