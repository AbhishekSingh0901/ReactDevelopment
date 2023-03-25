import React from "react";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const valueArr = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...valueArr);
  return (
    <div className="p-1  mx-auto md:w-5/6 w-full shadow-2xl pb-2 max-w-6xl bg-neutral-100 text-center flex justify-around h-40">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          max={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
