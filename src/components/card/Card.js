import React from "react";
import "./Card.scss";

export default function Card({ title, options, children }) {
  return (
    <div className="card">
      <h1 className="title">{title}</h1>
      
      {children}
    </div>
  );
}
