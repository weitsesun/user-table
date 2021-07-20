import React from "react";
import { useSelector } from "react-redux";

export default function TableHead({columns}) {
  const data = useSelector(state => state.data);

  function renderCell(column) {
    return <th className="row_header_cell">
      {column.value}
    </th>
  }

  return (
    <thead>
      <tr
        className="row_header"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns.length}, 1fr)`
        }}
      >
        {columns.map(renderCell)}
      </tr>
    </thead>
  );
}
