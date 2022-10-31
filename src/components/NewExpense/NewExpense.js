/* eslint-disable react/prop-types */
import React from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

export default function NewExpense({ ExpensesHandler }) {
  const ExpenseDataHandler = (NewExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...NewExpenseData,
    };
    ExpensesHandler(expenseData);
  };
  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={ExpenseDataHandler} />
    </div>
  );
}
