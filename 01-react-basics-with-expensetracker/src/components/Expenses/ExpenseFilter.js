import React from "react";

const ExpensesFilter = (props) => {
  const changeYearHandler = (event) => {
    event.preventDefault();
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="text-gray-900 px-4  mx-auto w-5/6 max-w-6xl border-x-2 border-gray-600">
      <div className="flex min-w-full items-center justify-between py-4">
        <label className="font-bold mb-2">Filter by year</label>
        <select
          value={props.selected}
          onChange={changeYearHandler}
          className="text-inherit py-2 px-12 font-bold rounded-lg"
        >
          <option value="2023">2023</option>
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
