import React from "react";
const Polyline = (props) => {
  const points = [props.start, ...props.vertex, props.end];
  const pointsStr = points.reduce(
    (acc, curr) => (acc += `${curr.x},${curr.y} `),
    ""
  );
  return <polyline points={pointsStr} />;
};
export default React.memo(Polyline);
