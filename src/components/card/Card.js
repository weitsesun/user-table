import React from "react";
import "./Card.scss";

export default function Card({ title, children }) {
  return (
    <div className="card">
      <h1>{title}</h1>
      {children}
    </div>
  );
}
