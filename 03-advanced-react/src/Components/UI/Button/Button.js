import React from "react"

const Button = (props) => {
  const isDisabled = props.disabled
  const classes =
    `${
      isDisabled
        ? "bg-gray-100"
        : "bg-gradient-to-tr from-teal-300 to-teal-500 text-gray-600"
    } 
     px-6 py-1 rounded-lg shadow-sm hover:opacity-70 hover:shadow-lg` +
    props.className
  return (
    <button
      type={props.type || "button"}
      className={classes}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button
