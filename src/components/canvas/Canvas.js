import React from "react";

const Canvas = () => {
  return (
    <svg
      // viewBox={`0 0 2000 2000`}
      // TODO: replace width and height with project dimmensions
      width="1000"
      height="800"
      style={{ border: "1px solid red", overflow: "visible" }}
    >
      <circle r="50" cx="100" cy="100" />
    </svg>
  );
};

export default Canvas;
