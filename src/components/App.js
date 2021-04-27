import { useSelector } from "react-redux";

import Home from "../pages/home/Home";
import Workspace from "../pages/workspace/Workspace";

import Bar from "./bar/bar";
import BarItem from "./bar/bar-item/bar-item";
import BarLink from "./bar/bar-link/bar-link";
import InputFile from "./input-file/InputFile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const isLoaded = useSelector((state) => state.project.isLoaded);
  const projectName = useSelector((state) => state.project.projectName);

  let projectNameItem = null;
  if (isLoaded)
    projectNameItem = (
      <BarItem>
        <BarLink path="/workspace">
          <h2>{projectName}</h2>
        </BarLink>
      </BarItem>
    );

  return (
    <Router>
      <div className="app">
        <div className="app__layout">
          <nav className="app__nav">
            <Bar align="row">
              <BarItem>
                <h1>Purple Project</h1>
              </BarItem>
              {projectNameItem}
              <BarItem>
                <InputFile />
              </BarItem>
            </Bar>
          </nav>
          <main className="app__main">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/workspace" exact>
                <Workspace />
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
