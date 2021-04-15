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
  return <ul className={classes.join(" ")}>{props.children}</ul>;
};
export default Bar;
