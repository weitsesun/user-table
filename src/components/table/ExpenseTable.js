import React, { useState } from "react";
import "./Table.scss";
import EditableExpenseRow from "./EditableExpenseRow";
import ReadOnlyExpenseRow from "./ReadOnlyExpenseRow";
import { v4 as uuidv4 } from "uuid";
import {
  updateCategory,
  calculateTotalExpenseForAll
} from "../../reducers/dataSlice";
import { useDispatch } from "react-redux";

export default function ExpenseTable({
  expenseData,
  setExpenseData,
  selectUserId,
  selectCategory
}) {
  const dispatch = useDispatch();
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
      id: uuidv4(),
      cost: addExpenseData.cost,
      date: addExpenseData.date
    };
    const newExpenseData = [...expenseData, newExpense];
    setExpenseData(newExpenseData);
    dispatch(
      updateCategory({
        id: selectUserId,
        category: selectCategory,
        data: newExpenseData
      })
    );
    dispatch(calculateTotalExpenseForAll());
  }

  function handleEditClick(e, expense) {
    e.preventDefault();
    setEditExpenseId(expense.id);
    const formValue = {
      cost: expense.cost,
      date: expense.date
    };
    setEditFormData(formValue);
  }

  function handleDeleteClick(e, id) {
    e.preventDefault();
    console.log(id);
    let targetIndex = -1;
    for(let i = 0; i < expenseData.length; i++) {
      if(expenseData[i].id === id) {
        targetIndex = i;
        break;
      }
    }
    if( targetIndex === -1) return;
    const newExpenseData = [
      ...expenseData.slice(0, targetIndex),
      ...expenseData.slice(targetIndex + 1, expenseData.length),
    ]
    setExpenseData(newExpenseData);
    dispatch(
      updateCategory({
        id: selectUserId,
        category: selectCategory,
        data: newExpenseData
      })
    );
    dispatch(calculateTotalExpenseForAll());

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
          type="number"
          name="cost"
          required="required"
          placeholder="Cost"
          onChange={handleAddNewExpenseChange}
        />
        <input
          type="date"
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
