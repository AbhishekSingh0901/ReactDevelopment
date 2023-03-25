// import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle("Updated!");
  //   console.log(title);
  // };
  return (
    <Card className="flex justify-between items-center p-2 md:m-4 my-4 bg-white shadow-md">
      <ExpenseDate date={props.date} />
      <div className="flex flex-col-reverse gap-1 items-end justify-start md:flex-row md:items-center md:justify-start md:flex-1">
        <h2 className=" text-gray-900 text-sm flex-1 md:mx-4 mx-1 md:text-2xl text-right md:text-center">
          {props.title}
        </h2>
        <div
          type="button"
          className=" text-gray-700 border-2 border-teal-500 mr-2 font-bold p-2 text-base md:text-xl md:py-2 md:px-6 hover:cursor-pointer"
        >
          ₹{props.amount}
        </div>
      </div>
      {/* <button
        onClick={clickHandler}
        className="px-8 py-3 bg-gradient-to-r from-zinc-800 to-zinc-900 ml-10 mr-4 rounded-lg shadow-xl shadow-gray-500 text-white hover:opacity-70 "
      >
        Change Title!
      </button> */}
    </Card>
  );
};

export default ExpenseItem;
