import React from "react";
import Canvas from "../canvas/Canvas.js";

import classes from "./workspace.module.scss";

const Workspace = () => {
  return (
    <div className={classes.workspace}>
      <Canvas />
    </div>
  );
};
export default Workspace;
