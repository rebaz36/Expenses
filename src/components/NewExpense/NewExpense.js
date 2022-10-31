import React from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

export default function NewExpense({ ExpensesHandler }) {
  const ExpenseDataHandler = (NewExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...NewExpenseData,
    };
    console.log(expenseData);
    ExpensesHandler(expenseData);
  };
  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={ExpenseDataHandler} />
    </div>
  );
}
