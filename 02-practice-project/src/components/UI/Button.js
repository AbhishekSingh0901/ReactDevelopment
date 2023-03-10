import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-gradient-to-tr from-cyan-300 to-cyan-500 px-10 py-2 rounded-md shadow-md hover:shadow-xl hover:from-cyan-400 hover:to-cyan-600 text-white font-bold uppercase trasform transition-all duration-200"
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
