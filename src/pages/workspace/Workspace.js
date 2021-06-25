import React from "react";
import { useSelector } from "react-redux";
import Canvas from "../../components/canvas/Canvas";
import Bar from "../../components/bar/bar";
import BarItem from "../../components/bar/bar-item/bar-item";
import BarTab from "../../components/bar/bar-tab/bar-tab";
import Select from "../../components/select/select";

const Workspace = () => {
  const project = useSelector((state) => state.project);

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
            {/* test tabs */}
            <BarTab label="test 2" />
            <BarTab label="test 3" />
            <BarTab label="test 1sdfsdfdsfs " />
            <BarTab label="test 4" />
            <BarTab label="test 5" />
            <BarTab label="test 6" />
            <BarTab label="test 7" />
            <BarTab label="test 8" />
            <BarTab label="test 9" />
            <BarTab label="test 10" />
          </Bar>
        </div>
      </div>
    </div>
  );
};
export default Workspace;
