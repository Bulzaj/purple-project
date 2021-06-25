import React from "react";

const BarTab = (props) => {
  const classes = ["bar__tab"];

  if (props.active) classes.push("bar__tab--active");
  if (props.disable) classes.push("bar__tab--disable");

  return (
    <div className={classes.join(" ")}>
      <h3>{props.label}</h3>
    </div>
  );
};

export default BarTab;
