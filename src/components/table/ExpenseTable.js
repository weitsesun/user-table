import React, { useState } from "react";
import "./Table.scss";
import EditableExpenseRow from "./EditableExpenseRow";
import ReadOnlyExpenseRow from "./ReadOnlyExpenseRow";

export default function ExpenseTable({ expenseData, setExpenseData }) {
  const [addExpenseData, setAddExpenseData] = useState({
    cost: "",
    date: ""
  });
  const [editExpenseId, setEditExpenseId] = useState();
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

  function handleEditFormChange(e) {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newEditData = { ...editFormData };
    newEditData[fieldName] = fieldValue;
    setEditFormData(newEditData);
  }

  function handleAddNewCostSubmit(e) {
    e.preventDefault();
    const newExpense = {
      cost: addExpenseData.cost,
      date: addExpenseData.date
    };
    const newExpenses = [...expenseData, newExpense];
    setExpenseData((prev) => newExpenses);
  }

  function handleEditClick(e, expense) {
    e.preventDefault();
    setEditExpenseId(expense.id);
    const formValue = {
      cost: expense.cost,
      date: expense.date
    };
    console.dir(formValue);
    setEditFormData(formValue);
  }

  function handleDeleteClick(e, id) {
    e.preventDefault();
    console.log(id);
  }


  return (
    <>
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
                {editExpenseId === expense.id ? (
                  <EditableExpenseRow
                    expense={expense}
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleDeleteClick={handleDeleteClick}
                  />
                ) : (
                  <ReadOnlyExpenseRow
                    expense={expense}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </>
            ))}
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
