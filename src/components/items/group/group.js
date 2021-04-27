import React from "react";

const Group = (props) => {
  return <g>{props.children}</g>;
};
export default React.memo(Group);
