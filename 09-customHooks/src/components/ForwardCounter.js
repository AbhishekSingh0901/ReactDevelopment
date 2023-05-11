import Card from "./Card";
import useCounter from "../hooks/use-counter";

const ForwardCounter = (props) => {
  const counter = useCounter(props.counter);
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
