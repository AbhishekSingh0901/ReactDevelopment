import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    // console.log(expenseData);
    props.onAddExpenseData(expenseData);
  };
  return (
    <div className="min-h-2/6 bg-gradient-to-tr shadow-xl from-[#46496b] to-[#9fadc5]  p-1 md:py-2 mt-10 rounded-t-2xl border-x-2 border-t-2 border-gray-600 mx-auto w-5/6 max-w-6xl ">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
