import "./card.css";

export default function card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
