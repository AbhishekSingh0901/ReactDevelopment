import React from "react";

const Card = (props) => {
  let classes = "bg-white shadow-lg rounded-xl p-5 " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
