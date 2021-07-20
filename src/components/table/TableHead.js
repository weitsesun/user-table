import React from "react";
import { useSelector } from "react-redux";

export default function TableHead({columns}) {
  const data = useSelector(state => state.data);

  function renderCell(column) {
    // {id, value}
    console.log(column)
    return <th>
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
