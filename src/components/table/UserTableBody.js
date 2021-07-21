import React, { useState } from "react";
import { get } from "lodash";
import moment from "moment";

export default function UserTableBody({ data, columns }) {
  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);

  function renderCell(column, user) {
    // let value =
    //   column.id !== "date"
    //     ? get(user, column.id, void 0)
    //     : moment(get(user, column.id, void 0)).format("YYYY/MM/DD");
    // console.log(user);
    // console.log(column)
    return (
      <td key={Math.random()} className="row_body_cell">
        <input
          className="row_input"
          value={column.id === "firstName" ? firstName : lastName}
          disabled={column.disabled}
          type={column.type}
          onChange={(e) => {
            column.id === "firstName"
              ? setFirstName(e.target.value)
              : setLastName(e.target.value);
          }}
        />
      </td>
      // <>
      //   <td key={Math.random()} className="row_body_cell">
      //     <input
      //       className="row_input"
      //       value={firstName}
      //       disabled={column.disabled}
      //       type={column.type}
      //       onChange={(e) => {
      //         setFirstName(e.target.value);
      //       }}
      //     />
      //   </td>
      //   <td key={Math.random()} className="row_body_cell">
      //     <input
      //       className="row_input"
      //       value={lastName}
      //       disabled={column.disabled}
      //       type={column.type}
      //       onChange={(e) => {}}
      //     />
      //   </td>
      //   <td key={Math.random()} className="row_body_cell">
      //     <input
      //       className="row_input"
      //       value={data.totalExpense}
      //       disabled={column.disabled}
      //       type={column.type}
      //     />
      //   </td>
      // </>
    );
  }

  function renderRow(user) {
    return (
      <tr
        key={Math.random()}
        className="row_body"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns.length}, 1fr)`
        }}
      >
        {columns.map((column) => renderCell(column, user))}
      </tr>
    );
  }

  return <tbody>{data && data.map((user) => renderRow(user))}</tbody>;
}
