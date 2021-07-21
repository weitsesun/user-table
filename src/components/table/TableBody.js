import React from "react";
import { get } from "lodash";
import moment from "moment";

export default function TableBody({ data, columns }) {
  function renderCell(column, item) {
    let value =
      column.id !== "date"
        ? get(item, column.id, void 0)
        : moment(get(item, column.id, void 0)).format("YYYY/MM/DD");
    return (
      <td key={Math.random()} className="row_body_cell">
        <input
          className="row_input"
          value={value}
          disabled={column.disabled}
          type={column.type}
          onChange={(e) => {
            column.onChange(item.id, e.target.value);
          }}
        />
      </td>
    );
  }

  function renderRow(item) {
    return (
      <tr
        key={Math.random()}
        className="row_body"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns.length}, 1fr)`
        }}
      >
        {columns.map((column) => renderCell(column, item))}
      </tr>
    );
  }

  return <tbody>{data && data.map((user) => renderRow(user))}</tbody>;
}
