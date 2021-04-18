const itemTypes = {
  OUTER_CIRCLE: "OuterCircle",
  OUTER_LINE: "OuterLine",
  OUTER_TEXT: "OuterText",
  OUTER_POLYLINE: "OuterPolyLine",
};

const documentParser = (document) => {
  return {
    pipeNetworks: mapCollection(
      getElements(document, "PipeNetworks"),
      PipeNetwork
    ),
  };
};

const PipeNetwork = (pipeNetwork) => {
  const getPipeNetworkAttr = (name) => getAttr(pipeNetwork, name);
  const mapPipeNetworkCollection = (collection, fn) =>
    mapCollection(getElements(pipeNetwork, collection), fn);

  return {
    name: getPipeNetworkAttr("name"),
    pipeNetType: getPipeNetworkAttr("pipeNetType"),
    desc: getPipeNetworkAttr("desc"),
    alignmentRef: getPipeNetworkAttr("alignmentRef"),
    layers: mapPipeNetworkCollection("Layers", Layer),
    drawing: mapPipeNetworkCollection("Drawing", Drawing),
  };
};

const Layer = (layer) => {
  return {
    id: getAttr(layer, "Numer"),
    name: getAttr(layer, "Nazwa"),
    color: getAttr(layer, "Color"),
    lineType: getAttr(layer, "RodzLinii"),
  };
};

const Drawing = (drawing) => {
  return itemFactory(drawing);
};

const Circle = (circle) => {
  const _circle = Object.create(itemProto(circle));
  _circle.r = +getValue(circle, "Promien");
  _circle.center = Position(getValue(circle, "Center"));
  return _circle;
};

const itemFactory = (item) => {
  const itemType = getTagName(item).split(".")[1];
  switch (itemType) {
    case itemTypes.OUTER_CIRCLE:
      return Circle(item);
  }
};

const itemProto = (item) => {
  const getItemAttr = (tag) => {
    const el = getElements(item, tag)[0];
    return getAttr(el, "Value");
  };
  return {
    handle: getItemAttr("Handle"),
    layerId: getItemAttr("Layer"),
  };
};

const Position = (positionString) => {
  const [_x, _y, _z] = positionString.trim().split(" ");
  return { x: +_x, y: +_y, z: +_z || 0 };
};

const mapCollection = (collection, fn) => [...collection[0].children].map(fn);

const getElements = (document, tag) => document.getElementsByTagName(tag);

const getAttr = (node, attrName) => node.getAttribute(attrName);

const getValue = (node, tag) => getElements(node, tag)[0].innerHTML;

const getTagName = (node) => node.tagName;

export default documentParser;
