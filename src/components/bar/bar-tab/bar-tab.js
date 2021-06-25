import React, { useState, useCallback } from "react";

const BarTab = (props) => {
  const [isHover, setIsHover] = useState(false);

  const classes = ["bar__tab"];

  const toggleOnExitBtnHandler = () => {
    setIsHover(true);
  };

  const toggleOffExitBtnHandler = () => {
    setIsHover(false);
  };

  const selectLayerHandler = useCallback(() => {
    // TODO: Select and move canvas to layer
  }, []);

  if (props.active) classes.push("bar__tab--active");
  if (props.disable) classes.push("bar__tab--disable");

  return (
    <div
      className={classes.join(" ")}
      onMouseEnter={toggleOnExitBtnHandler}
      onMouseLeave={toggleOffExitBtnHandler}
      onClick={selectLayerHandler}
    >
      <h3 className="label">{props.label}</h3>
      {/* //TODO: Toggle exit btn on hover */}
    </div>
  );
};

export default BarTab;
