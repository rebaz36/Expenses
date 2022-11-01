/* eslint-disable jsx-a11y/label-has-associated-control, react/prop-types */
import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = ({ handleFilter, selected }) => {
  const dropdownChangeHandler = (event) => {
    handleFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          value={selected}
          placeholder="Select a Year"
          onChange={dropdownChangeHandler}
        >
          <option value="" disabled>Select a Year</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

// listen to changes
// when user selects new filter filter the array
