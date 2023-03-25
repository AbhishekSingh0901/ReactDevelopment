import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../ui/Card";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [fileredYear, SetFilteredYear] = useState("2023");
  const filterChangeHandler = (selectedYear) => {
    // console.log(selectedYear);
    SetFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === fileredYear;
  });

  return (
    <div className="h-4/6">
      <ExpensesFilter
        selected={fileredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <Card className="h-5/6 md:h-4/6 p-4 bg-neutral-100 shadow-xl mb-8 mx-auto md:w-5/6 w-full max-w-6xl overflow-y-scroll scrollbar-hide ">
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
