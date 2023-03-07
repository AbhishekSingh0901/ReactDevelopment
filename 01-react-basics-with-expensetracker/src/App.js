import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpences/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2023, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 4, 3),
  },
  {
    id: "e5",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 4, 3),
  },
  {
    id: "e6",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2019, 4, 3),
  },
  {
    id: "e7",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 5, 3),
  },
  {
    id: "e8",
    title: "New chair",
    amount: 450,
    date: new Date(2023, 5, 3),
  },
  {
    id: "e9",
    title: "New books",
    amount: 450,
    date: new Date(2023, 9, 3),
  },
  {
    id: "e9",
    title: "New books",
    amount: 450,
    date: new Date(2023, 9, 3),
  },
  {
    id: "e9",
    title: "New books",
    amount: 450,
    date: new Date(2023, 9, 3),
  },
  {
    id: "e9",
    title: "New books",
    amount: 450,
    date: new Date(2023, 9, 3),
  },
];

const App = () => {
  const [currExpense, setCurrExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandeler = (expense) => {
    setCurrExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div className="flex flex-col h-screen my-auto">
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
