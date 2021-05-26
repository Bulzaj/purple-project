import React from "react";

// create transfrom attr string
const transform = (t, s) => {
  return `${translate(t) || ""} ${scale(s) || ""}`;
};

// create translate attr string
const translate = (translate) => {
  if (!translate) return null;
  return `translate(${translate.x}, ${translate.y})`;
};

// create scale attr string
const scale = (scale) => {
  if (!scale) return null;
  return `scale(${scale})`;
};

const Viewbox = (props) => {
  return (
    <g transform={transform(props.translate, props.scale)}>{props.children}</g>
  );
};

export default Viewbox;
