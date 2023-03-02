import React from "react";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="flex flex-col md:w-24 md:h-24 h-20 w-20 border-2 border-slate-900 bg-gray-300 text-slate-800 rounded-lg md:m-2 m-1 items-center justify-center">
      <div className="font-bold text-sm md:text-base">{month}</div>
      <div className="text-sm">{year}</div>
      <div className=" text-xl md:text-2xl font-bold">{day}</div>
    </div>
  );
};

export default ExpenseDate;
