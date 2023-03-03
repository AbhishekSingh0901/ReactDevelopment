import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  return (
    <div className="bg-gradient-to-tr shadow-xl from-[#46496b] to-[#9fadc5]  p-1 md:p-2 my-8 rounded-2xl mx-auto w-5/6 max-w-6xl ">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
