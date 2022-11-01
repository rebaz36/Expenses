/* eslint-disable react/prop-types */
import React from 'react';
import './ExpenseItem.css';
import Card from '../UI/card/card';
import ExpenseDate from './ExpenseDate';

export default function ExpenseItem({ Title, Amount, Date }) {
  return (
    <Card className="expense-item">
      <ExpenseDate Date={Date} />
      <div className="expense-item__description">
        <h2>{Title}</h2>
        <div className="expense-item__price">{Amount}</div>
      </div>
    </Card>
  );
}
