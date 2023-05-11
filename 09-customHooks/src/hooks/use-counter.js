import { useState, useEffect } from "react";

const useCounter = (count, forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (count) {
      const interval = setInterval(() => {
        setCounter((prevCounter) =>
          forwards ? prevCounter + 1 : prevCounter - 1
        );
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [count, forwards]);

  return counter;
};

export default useCounter;
