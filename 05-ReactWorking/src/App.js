import React, { useState, useCallback } from "react"
import Button from "./components/UI/Button/Button"
import "./App.css"
import DemoOutput from "./components/Demo/DemoOutput"

function App() {
  const [showPara, setShowPara] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)

  const toggleParaHandler = useCallback(() => {
    if (allowToggle) setShowPara((showPara) => !showPara)
  }, [allowToggle])

  const allowToggleHandler = () => {
    setAllowToggle(true)
  }
  // console.log("App running")
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPara} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParaHandler}>Toggle Paragraph</Button>
    </div>
  )
}

export default App
