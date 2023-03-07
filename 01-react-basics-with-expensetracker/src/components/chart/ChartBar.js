import React from "react";

const ChartBar = (props) => {
  let barfillHeight = "0%";
  if (props.max > 0) {
    barfillHeight = Math.round((props.value / props.max) * 100) + "%";
    console.log(barfillHeight);
  }
  return (
    <div className="h-full flex flex-col items-center">
      <div className="flex flex-col h-full  border border-bg-[#edf6f9] w-5 rounded-xl bg-[#145249] overflow-hidden justify-end">
        <div
          style={{ height: barfillHeight, backgroundColor: "#fefadc" }}
          className="w-full transform transition-all ease-in duration-200"
        ></div>
      </div>
      <div className="font-bold text-xs text-center">{props.label}</div>
    </div>
  );
};
export default ChartBar;
