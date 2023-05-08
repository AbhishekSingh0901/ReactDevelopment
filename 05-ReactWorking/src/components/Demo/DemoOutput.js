import React from "react"

const DemoOutput = (props) => {
  // console.log("Demo running")
  return <h2>{props.show ? "Nice to meet you" : "rattatatata"}</h2>
}

export default React.memo(DemoOutput)
