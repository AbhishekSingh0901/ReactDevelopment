import React from "react";

const Card = (props) => {
  let classes =
    "bg-white shadow-xl text-lg rounded-xl my-10 mx-auto  max-w-4xl " +
    props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
