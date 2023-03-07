import React from "react";

const ExpensesFilter = (props) => {
  const changeYearHandler = (event) => {
    event.preventDefault();
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="text-white px-4  mx-auto md:w-5/6 w-full max-w-6xl border-x-2 border-[#d6f5f1] bg-[#0f3d37]">
      <div className="flex min-w-full items-center justify-between py-4">
        <label className="font-bold mb-2 ">Filter by year</label>
        <select
          value={props.selected}
          onChange={changeYearHandler}
          className="py-2 px-12 font-bold rounded-lg text-gray-900 bg-[#fefadc]"
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
