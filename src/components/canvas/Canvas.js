import React, { useState, useEffect } from "react";

import usePipeNetworkDrawer from "../../hooks/usePipeNetworkDrawer";
import usePanning from "../../hooks/usePanning";
import useZooming from "../../hooks/useZooming";

import { useSelector } from "react-redux";
import Viewbox from "../viewbox/viewbox";

const Canvas = (props) => {
  const pipeNetworkDrawer = usePipeNetworkDrawer();
  const [items, setItems] = useState([]);
  const { handlers: panHandlers } = usePanning();
  const { handlers: zoomHandlers } = useZooming();

  const { pipeNetwork } = props;

  useEffect(() => {
    setItems(pipeNetworkDrawer(props.pipeNetwork));
  }, [pipeNetwork]);

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
