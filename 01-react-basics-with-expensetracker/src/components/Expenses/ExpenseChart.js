import React from "react";
import Chart from "../chart/Chart";

const ExpenseChart = (props) => {
  const charDataPoints = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "apr", value: 0 },
    { label: "may", value: 0 },
    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "aug", value: 0 },
    { label: "sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    charDataPoints[expenseMonth].value += expense.amount;
    console.log(charDataPoints);
  }
  return <Chart dataPoints={charDataPoints} />;
};

export default ExpenseChart;
