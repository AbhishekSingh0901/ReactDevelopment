import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpences/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
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
      date: new Date(),
    },
  ];

  const addExpenseHandeler = (expense) => {
    console.log(`in App js`);
    console.log(expense);
  };
  return (
    <div className="flex flex-col h-screen">
      <NewExpense onAddExpenseData={addExpenseHandeler} />
      <Expenses items={expenses} />
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
