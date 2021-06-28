import React from "react";
import { useSelector } from "react-redux";
import Canvas from "../../components/canvas/Canvas";
import Bar from "../../components/bar/bar";
import BarItem from "../../components/bar/bar-item/bar-item";
import BarTab from "../../components/bar/bar-tab/bar-tab";

import Select from "../../components/select/select";

import useLayerTabsDrawer from "../../hooks/useLayerTabsDrawer";

// TODO: create pipenetworks selector
// TODO: render spinner when project is loading
const Workspace = () => {
  const project = useSelector((state) => state.project);

  const layerTabsDrawer = useLayerTabsDrawer();

  return (
    <div className="workspace">
      <div className="workspace__layout">
        <div className="workspace__canvas">
          <Canvas pipeNetwork={project.pipeNetworks[0]} />
        </div>
        <div className="workspace__bar">
          <Bar align="column">
            <BarItem>
              <Select
                options={
                  project.isLoaded && project.pipeNetworks.map((pn) => pn.name)
                }
                name="Pipe Networks:"
              />
            </BarItem>
          </Bar>
        </div>
        <div className="workspace__bottom-bar">
          <Bar align="row" justify="start" scrollableX>
            <BarTab label="root"></BarTab>
            {layerTabsDrawer(project.pipeNetworks[0].layers)}
          </Bar>
        </div>
      </div>
    </div>
  );
};
export default Workspace;
