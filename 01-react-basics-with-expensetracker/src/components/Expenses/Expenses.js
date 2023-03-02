import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";

const Expenses = (props) => {
  return (
    <Card className="p-4 bg-gradient-to-tr from-[#46496b] via-[#9fadc5] to-[#edf2f4] my-16 mx-auto w-5/6 max-w-6xl  ">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem>
    </Card>
  );
};

export default Expenses;
