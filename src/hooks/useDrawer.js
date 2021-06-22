import { itemTypes } from "../util/documentParser";
import Group from "../components/items/group/group";
import Circle from "../components/items/circle/Circle";
import Line from "../components/items/line/line";
import Polyline from "../components/items/polyline/polyline";
import Text from "../components/items/text/text";

/**
 * Creates an item component of the appropriate type
 * @param {*} item
 * @returns Pipeline item
 */
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

const drawPipeNetwork = (pipeNetwork) => {
  return pipeNetwork.layers.map((layer) => {
    return <Group key={layer.id}>{layer.items.map(itemCreator)}</Group>;
  });
};

const useDrawer = () => {
  return drawPipeNetwork;
};

export default useDrawer;
