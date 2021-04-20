import React from "react";

const Circle = (props) => {
  return <circle cx={props.center.x} cy={props.center.y} r={props.r} />;
};
export default React.memo(Circle);
