import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/card/card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

export default function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("");
  const handleFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter handleFilter={handleFilter} />
        {filteredYear === ""
          ? expenses.map((expense) => {
              return (
                <ExpenseItem
                  key={expense.id}
                  Title={expense.title}
                  Amount={expense.amount}
                  Date={expense.date}
                />
              );
            })
          : filteredExpenses.map((expense) => {
              return (
                <ExpenseItem
                  key={expense.id}
                  Title={expense.title}
                  Amount={expense.amount}
                  Date={expense.date}
                />
              );
            })}
      </Card>
    </div>
  );
}
