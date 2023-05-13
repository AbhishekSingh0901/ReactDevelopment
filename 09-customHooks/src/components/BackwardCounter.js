import Card from "./Card";
import useCounter from "../hooks/use-counter";
const BackwardCounter = (props) => {
  const counter = useCounter(props.counter, false);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
