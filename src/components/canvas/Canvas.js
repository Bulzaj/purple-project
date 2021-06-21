import React from "react";

import useDrawer from "../../hooks/useDrawer";
import usePanning from "../../hooks/usePanning";
import useZooming from "../../hooks/useZooming";

import { useSelector } from "react-redux";
import Viewbox from "../viewbox/viewbox";

const Canvas = (props) => {
  const items = useDrawer(props.pipeNetwork);
  const { handlers: panHandlers } = usePanning();
  const { handlers: zoomHandlers } = useZooming();

  const position = useSelector((state) => state.canvas.position);
  const scale = useSelector((state) => state.canvas.scale);

  return (
    <svg
      className="canvas"
      overflow="hidden"
      onMouseDown={panHandlers.handleMouseDown}
      onMouseMove={panHandlers.handleMouseMove}
      onMouseUp={panHandlers.handleMouseUp}
      onWheel={zoomHandlers.handleWheel}
    >
      <Viewbox translate={position} scale={scale}>
        {items}
      </Viewbox>
    </svg>
  );
};

export default Canvas;
