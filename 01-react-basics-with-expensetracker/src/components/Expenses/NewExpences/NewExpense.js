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

  const closeExpenseHandler = () => {
    if (isEditing) {
      setIsEditing(false);
    }
  };
  return (
    <div className="relative min-h-2/6 shadow-xl px-4 md:py-2 md:mt-10 bg-neutral-100 mx-auto w-full md:w-5/6 max-w-6xl ">
      {!isEditing && (
        <button
          onClick={addNewExpenseHandler}
          className=" bg-gradient-to-tr from-teal-400 to-teal-600 my-10 w-full md:w-1/2 px-10 py-2 text-white shadow-lg hover:opacity-80"
        >
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={closeExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
