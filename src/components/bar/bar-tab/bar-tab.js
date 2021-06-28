import React, { useState, useCallback } from "react";

import Button from "../../button/button";

const BarTab = (props) => {
  const [isHover, setIsHover] = useState(false);

  const classes = ["bar__tab"];

  const toggleOnExitBtnHandler = () => {
    setIsHover(true);
  };

  const toggleOffExitBtnHandler = () => {
    setIsHover(false);
  };

  if (props.active) classes.push("bar__tab--active");
  if (props.disable) classes.push("bar__tab--disable");

  let exitBtn = null;

  if (isHover && props.btnIcon) {
    exitBtn = <Button icon={props.btnIcon} />;
  }

  return (
    <div
      className={classes.join(" ")}
      onMouseEnter={toggleOnExitBtnHandler}
      onMouseLeave={toggleOffExitBtnHandler}
      onClick={props.onClickHandler}
    >
      <h3 className="label">{props.label}</h3>
      {exitBtn}
      {/* //TODO: Toggle exit btn on hover */}
    </div>
  );
};

export default BarTab;
