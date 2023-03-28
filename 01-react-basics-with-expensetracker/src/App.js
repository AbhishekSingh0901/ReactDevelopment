import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpences/NewExpense";

const DUMMY_EXPENSES = JSON.parse(localStorage.getItem("DUMMY_EXPENSES"));
const App = () => {
  const [currExpense, setCurrExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandeler = (expense) => {
    setCurrExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  localStorage.setItem("DUMMY_EXPENSES", JSON.stringify(currExpense || []));

  return (
    <div className="bg-gray-100 flex flex-col h-screen my-auto">
      <NewExpense onAddExpenseData={addExpenseHandeler} />
      <Expenses items={currExpense} />
    </div>
  );

  //* Older Format

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement(
  //     "h2",
  //     { className: "text-5xl font-bold mt-6" },
  //     `Let's get started!`
  //   ),
  //   React.createElement(Expenses, { items: expenses })
  // );
};

export default App;
