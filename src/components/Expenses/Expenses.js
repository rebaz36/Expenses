/* eslint-disable no-nested-ternary, react/prop-types */
import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/card/card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

export default function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('');
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const handleFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
    setFilteredExpenses(
      expenses.filter(
        (expense) => expense.date.getFullYear().toString() === selectedYear,
      ),
    );
  };

  let expensesContent = <p className="no-expenses">No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        Title={expense.title}
        Amount={expense.amount}
        Date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} handleFilter={handleFilter} />
        {expensesContent}
      </Card>
    </div>
  );
}
