import React from "react";

const Group = (props) => {
  return <g id={props.id}>{props.children}</g>;
};
export default React.memo(Group);
