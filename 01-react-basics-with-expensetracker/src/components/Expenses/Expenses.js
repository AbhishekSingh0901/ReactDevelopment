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
    <div className=" h-4/6">
      <ExpensesFilter
        selected={fileredYear}
        onChangeFilter={filterChangeHandler}
      />
      <Card className="min-h-5/6 p-4 bg-gradient-to-tr shadow-xl from-[#20a39e] via-[#145249] to-[#0a2925] rounded-b-2xl border-x-2 border-b-2 border-[#d6f5f1] mb-8 mx-auto md:w-5/6 w-full max-w-6xl overflow-y-scroll scrollbar-hide ">
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
