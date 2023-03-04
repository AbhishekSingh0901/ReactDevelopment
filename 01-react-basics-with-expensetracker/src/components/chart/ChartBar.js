import React from "react";

const ChartBar = (props) => {
  let barfillHeight = "0%";
  if (props.max > 0) {
    barfillHeight = Math.round((props.value / props.max) * 100) + "%";
    console.log(barfillHeight);
  }
  return (
    <div className="h-full flex flex-col items-center">
      <div className="flex flex-col h-full w-5 border-2 border-gray-600 rounded-xl bg-[#c3b4f3] overflow-hidden justify-end">
        <div
          style={{ height: barfillHeight, backgroundColor: "#4836b9" }}
          className="w-full transform transition-all ease-in duration-200"
        ></div>
      </div>
      <div className="font-bold text-xs text-center">{props.label}</div>
    </div>
  );
};
export default ChartBar;
