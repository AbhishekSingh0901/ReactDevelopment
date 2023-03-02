import React from "react";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="flex flex-col w-24 h-24 border-2 border-slate-900 bg-gray-300 text-slate-800 rounded-lg m-2 items-center justify-center">
      <div className="font-bold test-sm">{month}</div>
      <div className="text-sm">{year}</div>
      <div className=" text-2xl font-bold">{day}</div>
    </div>
  );
};

export default ExpenseDate;
