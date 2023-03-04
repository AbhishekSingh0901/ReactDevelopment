import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    // console.log(expenseData);
    props.onAddExpenseData(expenseData);
    setIsEditing(false);
  };

  const addNewExpenseHandler = () => {
    setIsEditing(true);
  };

  const closeExpenseHandlert = () => {
    if (isEditing) {
      setIsEditing(false);
    }
  };
  return (
    <div className="relative min-h-2/6 bg-gradient-to-tr shadow-xl from-[#46496b] to-[#9fadc5]  p-1 md:py-2 mt-10 rounded-t-2xl border-x-2 border-t-2 border-gray-600 mx-auto w-5/6 max-w-6xl ">
      {!isEditing && (
        <button
          onClick={addNewExpenseHandler}
          className="bg-zinc-600 my-10 w-full md:w-1/2 px-10 py-2 text-white rounded-lg border-2 border-gray-500 shadow-lg hover:opacity-60"
        >
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={closeExpenseHandlert}
        />
      )}
    </div>
  );
};

export default NewExpense;
