import React, { useEffect, useRef, useState } from "react";

import useDrawer from "../../hooks/useDrawer";
import usePanning from "../../hooks/usePanning";
import useZooming from "../../hooks/useZooming";

import { useDispatch, useSelector } from "react-redux";
import Viewbox from "../viewbox/viewbox";

const Canvas = (props) => {
  const canvasRef = useRef();
  const items = useDrawer(props.pipeNetwork);
  const { handlers: panHandlers } = usePanning();
  const { handlers: zoomHandlers } = useZooming();

  const position = useSelector((state) => state.canvas.position);
  const scale = useSelector((state) => state.canvas.scale);

  return (
    <svg
      ref={canvasRef}
      className="canvas"
      overflow="hidden"
      onMouseDown={panHandlers.handleMouseDown}
      onMouseMove={panHandlers.handleMouseMove}
      onMouseUp={panHandlers.handleMouseUp}
      onWheel={zoomHandlers.handleWheel}
    >
      <Viewbox translate={position} scale={scale}>
        <circle cx={0} cy={0} r={100} />
        <rect x={550} y={320} width={100} height={100} />
        {items}
      </Viewbox>
    </svg>
  );
};

export default Canvas;
