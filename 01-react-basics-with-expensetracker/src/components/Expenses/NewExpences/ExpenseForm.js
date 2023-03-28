import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredtitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredAmount(event.target.value);
  };
  const DateChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredtitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className=" grid grid-cols-2 gap-2 mb-4 mx-4 md:mx-10 items-right">
        <div>
          <label className="font-bold block my-2 text-left">Title</label>
          <input
            className="font-inherit p-2 rounded-md w-full"
            type="text"
            value={enteredtitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div>
          <label className="font-bold block my-2 text-left">Amount</label>
          <input
            className="font-inherit p-2 rounded-md w-full"
            type="number"
            min="1"
            max="100000"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div>
          <label className="font-bold block my-2 text-left">Date</label>
          <input
            className="font-inherit p-2 rounded-md w-full"
            type="date"
            min="2018-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={DateChangeHandler}
          />
        </div>
        <div className="mt-10 w-full">
          <button
            type="submit"
            className="bg-zinc-600 w-full px-8 py-2 text-white rounded-lg border-2 border-gray-500 shadow-lg hover:opacity-60"
          >
            Add
          </button>
          <button
            onClick={props.onCancel}
            className="absolute top-2 right-3 font-bold text-2xl text-gray-900"
          >
            &#8855;
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
