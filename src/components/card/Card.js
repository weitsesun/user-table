import React from "react";
import "./Card.scss";

export default function Card({ title, options = [], children }) {
  return (
    <div className="card">
      <h1 className="title">{title}</h1>
      <div className="option-container">
        {options.map(({ title, options, value, onChange = ()=>{} }) => (
          <div className="option" key={Math.random()}>
            <label htmlFor={title}>{title}</label>
            <select onChange={onChange} value={value}>
              {options?.map( option => <option key={Math.random()} value={option.id}>{option.value}</option>)}
            </select>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}
