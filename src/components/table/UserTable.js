import React from "react";
import "./Table.scss";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import UserTableBody from "./UserTableBody";

export default function UserTable({ data, columns }) {
  return (
    <table className="table">
      <TableHead data={data} columns={columns}/>
      <UserTableBody data={data} columns={columns}/>
    </table>
  );
}
