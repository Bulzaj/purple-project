const itemTypes = {
  OUTER_CIRCLE: "OuterCircle",
  OUTER_LINE: "OuterLine",
  OUTER_POLYLINE: "OuterPolyLine",
  OUTER_TEXT: "OuterText",
  OUTER_TEXT_2: "OuterText2",
};

const documentParser = (document) => {
  // console.log(scanDrawingTags(document));
  return {
    projectName: getAttr(getElements(document, "Project")[0], "name"),
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

const Line = (line) => {
  const _line = Object.create(itemProto(line));
  _line.p1 = Position(getValue(line, "P1"));
  _line.p2 = Position(getValue(line, "P2"));
  return _line;
};

const PolyLine = (polyLine) => {
  const _polyLine = Object.create(itemProto(polyLine));
  _polyLine.diameter = getAttr(polyLine, "Diameter");
  _polyLine.start = Position(getValue(polyLine, "Start"));
  _polyLine.vertex = [...getElements(polyLine, "Vertex")].map((v) =>
    Position(v.innerHTML)
  );
  _polyLine.end = Position(getValue(polyLine, "End"));
  return _polyLine;
};

const Text = (text) => {
  const _text = Object.create(itemProto(text));
  _text.dimmension = {
    hf: +getAttr(getElements(text, "Wymiar")[0], "Hf"),
    sF: +getAttr(getElements(text, "Wymiar")[0], "Sf") || "",
  };
  _text.alligment = getAttr(getElements(text, "Aligment")[0], "value");
  _text.start = Position(getValue(text, "Start"));
  _text.text = getAttr(getElements(text, "Text")[0], "Tekst");
  return _text;
};

const Text2 = (text) => {
  const _text = Object.create(itemProto(text));
  _text.dimmension = {
    hf: +getAttr(getElements(text, "Wymiar")[0], "Hf"),
    sF: +getAttr(getElements(text, "Wymiar")[0], "Sf") || "",
  };
  _text.start = Position(getValue(text, "Start"));
  _text.end = Position(getValue(text, "End"));
  return _text;
};

const itemFactory = (item) => {
  const itemType = getTagName(item).split(".")[1];
  switch (itemType) {
    case itemTypes.OUTER_CIRCLE:
      return Circle(item);
    case itemTypes.OUTER_LINE:
      return Line(item);
    case itemTypes.OUTER_POLYLINE:
      return PolyLine(item);
    case itemTypes.OUTER_TEXT:
      return Text(item);
    case itemTypes.OUTER_TEXT_2:
      return Text2(item);
  }
};

const itemProto = (item) => {
  const getItemAttr = (tag) => {
    const el = getElements(item, tag)[0];
    return getAttr(el, "Value");
  };
  return {
    type: getTagName(item).split(".")[1],
    handle: getItemAttr("Handle"),
    layerId: getItemAttr("Layer"),
  };
};

const Position = (positionString) => {
  const [_x, _y, _z] = positionString.trim().split(" ");
  return { x: +_x, y: +_y, z: +_z || 0 };
};

// helpers
const mapCollection = (collection, fn) => [...collection[0].children].map(fn);

const getElements = (document, tag) => document.getElementsByTagName(tag);

const getAttr = (node, attrName) => node.getAttribute(attrName);

const getValue = (node, tag) => getElements(node, tag)[0].innerHTML;

const getTagName = (node) => node.tagName;

// Probably for debugging purposes only
export const undefinedDrawingTracker = (drawing, fn) => {
  for (let item of drawing) {
    item || fn(item);
  }
};

const scanDrawingTags = (node) => {
  const drawing = mapCollection(
    getElements(node, "Drawing"),
    (item) => getTagName(item).split(".")[1]
  );
  return [...new Set(drawing)];
};

export default documentParser;
