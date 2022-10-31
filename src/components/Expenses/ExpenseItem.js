import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/card/card";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem({ Title, Amount, Date }) {
  const [title, setTitle] = useState(Title);

  function clickHandler() {
    setTitle("Updated!");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate Date={Date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{Amount}</div>
      </div>
      <button onClick={clickHandler}>click me</button>
    </Card>
  );
}
