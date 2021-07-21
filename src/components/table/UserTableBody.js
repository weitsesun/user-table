import React, { useState, useEffect } from "react";
import { get } from "lodash";
import moment from "moment";

export default function UserTableBody({ data, columns }) {

  function renderCell(column, user) {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    
    return (
      <td key={Math.random()} className="row_body_cell">
        <input
          className="row_input"
          value={column.id == "firstName" ? firstName : lastName}
          disabled={column.disabled}
          type={column.type}
          onChange={(e) => {
            column.id === "firstName"
              ? setFirstName(e.target.value)
              : setLastName(e.target.value);
          }}
        />
      </td>
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
