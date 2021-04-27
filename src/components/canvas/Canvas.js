import React, { useEffect, useRef, useState } from "react";

import usePanning from "../../hooks/usePanning";
import useEventLisener from "../../hooks/useEventListener";

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

// Manipulate viewbox position and dimmension attribute state with mouse wheel event
const useZooming = (zoomRatio = 0.2) => {
  //redux hooks
  const dimmension = useSelector((state) => state.viewbox.dimmension);
  const dispatch = useDispatch();

  useEffect(() => console.log(dimmension));

  return {
    ...dimmension,
    handlers: {},
  };
};

const Canvas = (props) => {
  const items = useDrawer(props.pipeNetwork);
  const { position, handlers: panHandlers } = usePanning();
  const { dimmension, handlers: zoomHandlers } = useZooming();

  let viewBox = null;
  if (position)
    viewBox = `${position.x} ${position.y} ${dimmension.width} ${dimmension.height}`;

  return (
    <svg
      viewBox={viewBox}
      className="canvas"
      overflow="auto"
      onMouseDown={panHandlers.handleMouseDown}
      onMouseMove={panHandlers.handleMouseMove}
      onMouseUp={panHandlers.handleMouseUp}
      onWheel={() => console.log("wheeling")}
    >
      <Group>
        <circle cx={0} cy={0} r={100} />
        <rect x={550} y={320} width={100} height={100} />
        {items}
      </Group>
    </svg>
  );
};

export default Canvas;
