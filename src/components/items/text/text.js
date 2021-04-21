import React from "react";

const Text = (props) => {
  return (
    <text x={props.start.x} y={props.start.y}>
      {props.text}
    </text>
  );
};
export default Text;
