import React from "react";

const Group = (props) => {
  const translate = `translate(${props.translate.x}, ${props.translate.y})`;
  return <g transform={translate}>{props.children}</g>;
};
export default React.memo(Group);
