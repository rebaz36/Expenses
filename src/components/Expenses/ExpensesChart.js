/* eslint-disable array-callback-return */
import React from 'react';

import PropsType from 'prop-types';
import Chart from '../chart/Chart';

export default function ExpensesChart({ expenses }) {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  expenses.map((expense) => {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  });

  return <Chart dataPoints={chartDataPoints} />;
}

// props validation
ExpensesChart.propTypes = {
  expenses: PropsType.arrayOf(
    PropsType.shape({
      id: PropsType.string.isRequired,
      title: PropsType.string.isRequired,
      amount: PropsType.number.isRequired,
      date: PropsType.instanceOf(Date).isRequired,
    }),
  ).isRequired,
};
