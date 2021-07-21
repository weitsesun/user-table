import React from "react";
import "./Table.scss";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function Table({ data, columns }) {
  return (
    <table className="table">
      <TableHead data={data} columns={columns}/>
      <TableBody data={data} columns={columns}/>
    </table>
  );
}
