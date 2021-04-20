import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Canvas from "../../components/canvas/Canvas";
import Bar from "../../components/bar/bar";
import BarItem from "../../components/bar/bar-item/bar-item";
import Select from "../../components/select/select";

const Workspace = () => {
  const pipeNetworks = useSelector((state) => state.pipeNetworks);

  return (
    <div className="workspace">
      <div className="workspace__layout">
        <div className="workspace__canvas">
          <Canvas />
        </div>
        <div className="workspace__bar">
          <Bar align="column">
            <BarItem>
              <Select
                options={pipeNetworks.map((pn) => pn.name)}
                name="Pipe Networks"
              />
            </BarItem>
          </Bar>
        </div>
      </div>
    </div>
  );
};
export default Workspace;
