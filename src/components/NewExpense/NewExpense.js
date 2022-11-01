/* eslint-disable react/prop-types */
import React, { useState } from 'react';
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
  const [close, setClose] = useState(false);
  const handleClose = () => {
    setClose(true);
  };
  return (
    <div className="new-expense">
      {close === true ? (
        <NewExpenseForm
          close={setClose}
          onSaveExpenseData={ExpenseDataHandler}
        />
      ) : (
        <button type="button" onClick={handleClose}>
          {' '}
          Add New Expense
          {' '}
        </button>
      )}
    </div>
  );
}
