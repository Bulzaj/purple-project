import React from "react";
import { itemTypes } from "../../util/documentParser";
import Group from "../items/group/group";
import Circle from "../items/circle/Circle";
import Line from "../items/line/line";
import Text from "../items/text/text";

const itemCreator = (item) => {
  switch (item.type) {
    case itemTypes.OUTER_CIRCLE:
      return <Circle key={item.uuid} center={item.center} r={item.r} />;
    case itemTypes.OUTER_LINE:
      return <Line key={item.uuid} p1={item.p1} p2={item.p2} />;
    case itemTypes.OUTER_TEXT:
      return <Text key={item.uuid} start={item.start} text={item.text} />;
  }
};

const useDrawer = (pipeNetwork) => {
  return pipeNetwork.layers.map((layer) => {
    return (
      <Group key={layer.id}>
        {layer.items.map((item) => itemCreator(item))}
      </Group>
    );
  });
};

const Canvas = (props) => {
  const items = useDrawer(props.pipeNetwork);

  return (
    <svg
      // viewBox={`0 0 2000 2000`}
      // TODO: replace width and height with project dimmensions
      className="canvas"
    >
      {items}
    </svg>
  );
};

export default Canvas;
