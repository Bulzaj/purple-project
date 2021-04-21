import React from "react";

const Line = (props) => {
  return (
    <line
      x1={props.p1.x}
      y1={props.p1.y}
      x2={props.p2.x}
      y2={props.p2.y}
      stroke="black"
    />
  );
};
export default Line;
