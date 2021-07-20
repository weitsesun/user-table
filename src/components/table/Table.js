import React from "react";
import "./Table.scss";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function Table({ columns }) {
  return (
    <table className="table">
      <TableHead columns={columns}/>
      <TableBody />
    </table>
  );
}
