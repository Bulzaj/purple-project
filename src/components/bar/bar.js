import React from "react";

const Bar = (props) => {
  const classes = ["bar"];
  switch (props.align) {
    case "row":
      classes.push("bar--row");
      break;
    case "column":
      classes.push("bar--column");
      break;
    default:
      classes.push("bar--row");
      break;
  }

  switch (props.justify) {
    case "start":
      classes.push("bar--start");
      break;
    case "space-between":
      classes.push("bar--space-between");
      break;
    case "space-around":
      classes.push("bar--space-around");
    default:
      classes.push("bar--start");
      break;
  }

  if (props.scrollable) classes.push("bar--scrollable");
  if (props.scrollableX) classes.push("bar--scrollable-x");
  if (props.scrollableY) classes.push("bar--scrollable-y");

  if (props.wrappable) classes.push("bar--wrappable");

  return <div className={classes.join(" ")}>{props.children}</div>;
};
export default Bar;
