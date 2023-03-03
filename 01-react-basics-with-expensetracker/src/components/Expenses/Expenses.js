import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../ui/Card";
import ExpensesList from "./ExpensesList";

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
      <Card className="min-h-5/6 p-4 bg-gradient-to-tr shadow-xl from-[#46496b] via-[#9fadc5] to-[#edf2f4] rounded-b-2xl border-x-2 border-b-2 border-gray-600 mb-8 mx-auto w-5/6 max-w-6xl overflow-y-scroll scrollbar-hide ">
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
