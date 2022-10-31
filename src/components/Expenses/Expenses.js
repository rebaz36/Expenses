import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/card/card";
export default function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          Title={expense.title}
          Amount={expense.amount}
          Date={expense.date}
        />
      ))}
    </Card>
  );
}
