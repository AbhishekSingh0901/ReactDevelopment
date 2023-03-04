import React from "react";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const valueArr = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...valueArr);
  return (
    <div className="p-1 rounded-xl bg-[#f8dfff] text-center flex justify-around h-40">
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
