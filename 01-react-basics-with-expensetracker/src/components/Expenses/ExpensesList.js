import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expenseContent = (
    <p className="text-xl font-bold font-gray-900">No Expenses Found</p>
  );
  if (props.items.length === 0) {
    return expenseContent;
  }

  return (
    <ul>
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};
export default ExpensesList;
