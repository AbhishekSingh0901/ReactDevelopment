const Card = (props) => {
  const classes = "rounded-2xl " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
