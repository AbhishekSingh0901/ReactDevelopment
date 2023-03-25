import React from "react";

const ExpensesFilter = (props) => {
  const changeYearHandler = (event) => {
    event.preventDefault();
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="px-4 pt-4 text-black mx-auto md:w-5/6 w-full max-w-6xl bg-neutral-100 shadow-2xl">
      <div className="flex min-w-full items-center justify-between py-4">
        <label className="font-bold mb-2 ">Filter by year</label>
        <select
          value={props.selected}
          onChange={changeYearHandler}
          className="py-2 px-12 font-bold shadow-sm text-teal-500"
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
