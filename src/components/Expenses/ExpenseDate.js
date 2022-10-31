/* eslint-disable react/prop-types */
import './ExpenseDate.css';

export default function ExpenseDate({ Date }) {
  const month = Date.toLocaleString('en-US', { month: 'long' });
  const day = Date.toLocaleString('en-US', { day: '2-digit' });
  const year = Date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
