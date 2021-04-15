// const xmlParser = (xml) => {
//   const result = parser.xml2js(xml, { compact: true });
//   const root = result.LandXML;
//   const project = root.Project;
//   const pipeNetworks = root.PipeNetworks;

//   return {
//     projectName: project._attributes.name,
//     pipeNetworks: parsePipeNetworks(pipeNetworks),
//   };
// };

const documentParser = (document) => {
  console.log(document);
  const root = document.getElementsByTagName("LandXML")[0];
  const pipeNetworks = root.getElementsByTagName("PipeNetworks");

  return {
    pipeNetworks: getPipeNetworks(pipeNetworks),
  };
};

const getPipeNetworks = (pipeNetworks) => {
  const result = [];
  const _pipeNetworks = pipeNetworks[0].children;
  for (let item of _pipeNetworks) {
    const _pipeNetwork = {
      name: item.getAttribute("name"),
      layers: getLayers(item.getElementsByTagName("Layers")),
    };
    result.push(_pipeNetwork);
  }
  return result;
};

const getLayers = (layers) => {
  // const _layers = layers[0].children;
  // [..._layers].map((item) => console.log(item));
  return [...layers[0].children].map((item) => {
    return {
      id: item.getAttribute("Numer"),
    };
  });
};

// const parsePipeNetworks = (pipeNetworks) => {
//   const _pipeNetworks = [pipeNetworks];
//   return _pipeNetworks.map((pn) => {
//     const pipeNetwork = pn.PipeNetwork;
//     return {
//       name: pipeNetwork._attributes.name,
//       layers: parseLayers(pipeNetwork.Layers),
//       drawing: parseDrawing(pipeNetwork.Drawing),
//     };
//   });
// };

// const parseLayers = (layers) => {
//   const _layers = layers["Layer.Definicja"];
//   return _layers.map((layer) => {
//     return {
//       id: layer._attributes.Numer,
//       name: layer._attributes.Nazwa,
//       color: layer._attributes.Color,
//       lineType: layer._attributes.RodzLinii,
//     };
//   });
// };

// const parseDrawing = (drawing) => {
//   Object.entries(drawing).map((key, value) => console.log(key));
// };

// class Position {
//   #x;
//   #y;
//   #z;

//   constructor(positionStr) {}
// }

// class Circle extends Position {
//   constructor(positionStr) {
//     super(positionStr);
//   }
// }

// const createItem = (key, value) => {
//   switch (key) {
//     case "Item.OuterCircle":
//       return;
//   }
// };

export default documentParser;
