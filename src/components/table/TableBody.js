import React from "react";
import { get } from "lodash";
import moment from "moment"

export default function TableBody({ data, columns }) {
  function renderCell(id, item) {
    return (
      <td key={Math.random()} className="row_body_cell">
        {id !== "date"
          ? get(item, id, void 0)
          : moment(get(item, id, void 0)).format("YYYY/ MM/ DD ")}
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
        {columns.map((column) => renderCell(column.id, item))}
      </tr>
    );
  }

  return <tbody>{data && data.map((user) => renderRow(user))}</tbody>;
}
