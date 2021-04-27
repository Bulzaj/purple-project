import React, { useEffect, useRef, useState } from "react";

import usePanning from "../../hooks/usePanning";
import useEventLisener from "../../hooks/useEventListener";

import { itemTypes } from "../../util/documentParser";
import Group from "../items/group/group";
import Circle from "../items/circle/Circle";
import Line from "../items/line/line";
import Polyline from "../items/polyline/polyline";
import Text from "../items/text/text";

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

const updateDimmensions = (prevState, elementRef) => {
  return {
    ...prevState,
    width: elementRef.current.clientWidth,
    height: elementRef.current.clientHeight,
  };
};

const useElementDimmensions = (elementRef) => {
  const [dimmensions, setDimmensions] = useState({ width: null, height: null });

  useEffect(() => {
    setDimmensions((prevState) => updateDimmensions(prevState, elementRef));
  }, []);

  const handler = (e) => {
    setDimmensions((prevState) => updateDimmensions(prevState, elementRef));
  };

  useEventLisener("resize", handler);

  return dimmensions;
};

const Canvas = (props) => {
  const svgRef = useRef(null);
  const items = useDrawer(props.pipeNetwork);
  const { width, height } = useElementDimmensions(svgRef);
  const { position, handlers } = usePanning();

  let viewBox = null;
  if (position) viewBox = `${position.x} ${position.y} 1050 700`;

  return (
    <svg
      ref={svgRef}
      viewBox={viewBox}
      className="canvas"
      onMouseDown={handlers.handleMouseDown}
      onMouseMove={handlers.handleMouseMove}
      onMouseUp={handlers.handleMouseUp}
    >
      <text x={10} y={24} fontSize={26}>
        {position.x} {position.y} / {width}x{height}
      </text>

      <Group>
        <circle cx={300} cy={300} r={100} />
        <rect x={550} y={320} width={100} height={100} />
        {items}
      </Group>
    </svg>
  );
};

export default Canvas;
