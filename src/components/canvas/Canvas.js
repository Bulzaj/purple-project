import React, { useEffect, useRef, useState } from "react";

import usePanning from "../../hooks/usePanning";
import useZooming from "../../hooks/useZooming";
import useEventListener from "../../hooks/useEventListener";

import { itemTypes } from "../../util/documentParser";
import Group from "../items/group/group";
import Circle from "../items/circle/Circle";
import Line from "../items/line/line";
import Polyline from "../items/polyline/polyline";
import Text from "../items/text/text";
import { useDispatch, useSelector } from "react-redux";

const itemCreator = (item) => {
  switch (item.type) {
    case itemTypes.OUTER_CIRCLE:
      return <Circle key={item.uuid} center={item.center} r={item.r} />;
    case itemTypes.OUTER_LINE:
      return <Line key={item.uuid} p1={item.p1} p2={item.p2} />;
    case itemTypes.OUTER_POLYLINE:
      return (
        <Polyline
          key={item.uuid}
          start={item.start}
          vertex={item.vertex}
          end={item.end}
        />
      );
    case itemTypes.OUTER_TEXT || itemTypes.OUTER_TEXT_2:
      return (
        <Text
          key={item.uuid}
          start={item.start}
          text={item.text}
          dimmension={item.dimmension}
        />
      );
    case itemTypes.OUTER_TEXT_2:
      return;
    default:
      return null;
  }
};

const useDrawer = (pipeNetwork) => {
  return pipeNetwork.layers.map((layer) => {
    return <Group key={layer.id}>{layer.items.map(itemCreator)}</Group>;
  });
};

const useMousePosition = (element) => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const handler = (e) => {
    setMousePosition((prevState) => {
      return {
        ...prevState,
        x: e.offsetX,
        y: e.offsetY,
      };
    });
  };
  useEventListener("mousemove", handler, element);

  return mousePosition;
};

const Canvas = (props) => {
  const canvasRef = useRef();
  const items = useDrawer(props.pipeNetwork);
  const mousePosition = useMousePosition(canvasRef.current);
  const { handlers: panHandlers } = usePanning();
  const { handlers: zoomHandlers } = useZooming(mousePosition);

  const position = useSelector((state) => state.canvas.position);
  const dimmension = useSelector((state) => state.canvas.dimmension);

  return (
    <svg
      ref={canvasRef}
      className="canvas"
      overflow="hidden"
      onMouseDown={panHandlers.handleMouseDown}
      onMouseMove={panHandlers.handleMouseMove}
      onMouseUp={panHandlers.handleMouseUp}
      onWheel={zoomHandlers.handleOnWheel}
    >
      <Group translate={{ x: 100, y: 20 }}>
        <text x="600" y="200">
          Position: {mousePosition.x} / {mousePosition.y}
        </text>
        <circle cx={0} cy={0} r={100} />
        <rect x={550} y={320} width={100} height={100} />
        {items}
      </Group>
    </svg>
  );
};

export default Canvas;
