import React from 'react';
import './chartBar.css';

export default function chartBar({ value, max, label }) {
  let barFillHeight = '0%';

  if (max > 0) {
    barFillHeight = `${Math.round((value / max) * 100)}%`;
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div style={{ height: barFillHeight }} className="chart-bar__fill">
          {label}
        </div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
}
