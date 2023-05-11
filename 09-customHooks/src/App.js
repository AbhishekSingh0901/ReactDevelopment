import React, { useState } from "react";
import BackwardCounter from "./components/BackwardCounter";
import ForwardCounter from "./components/ForwardCounter";

function App() {
  const [startCounter, setStartCounter] = useState(false);

  const startCounterHandler = () => {
    setStartCounter(true);
  };
  return (
    <React.Fragment>
      <ForwardCounter counter={startCounter} />
      <BackwardCounter counter={startCounter} />
      <button onClick={startCounterHandler}>Click</button>
    </React.Fragment>
  );
}

export default App;
