import React from 'react';
import ChartBar from './ChartBar';
import './chart.css';

export default function chart({ dataPoints }) {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          max={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
