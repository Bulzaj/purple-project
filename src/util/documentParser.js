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
  return [...layers[0].children].map((item) => {
    return {
      id: item.getAttribute("Numer"),
    };
  });
};

export default documentParser;
