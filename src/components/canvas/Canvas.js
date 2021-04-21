import React from "react";
import { itemTypes } from "../../util/documentParser";
import Group from "../items/group/group";
import Circle from "../items/circle/Circle";

const itemCreator = (item) => {
  console.log(item);
  switch (item.type) {
    case itemTypes.OUTER_CIRCLE:
      return <Circle center={item.center} r={item.r} />;
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
