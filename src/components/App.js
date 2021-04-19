import { useEffect } from "react";
import { useSelector } from "react-redux";
import getRoutes from "../routes";
import Bar from "./bar/bar";
import BarItem from "./bar/bar-item/bar-item";
import InputFile from "./input-file/InputFile";
import Router from "./router/Router";

function App() {
  const isLoaded = useSelector((state) => state.isLoaded);
  const projectName = useSelector((state) => state.projectName);

  useEffect(() => console.log(isLoaded));

  let projectNameItem = null;
  if (isLoaded)
    projectNameItem = (
      <BarItem>
        <h2>{projectName}</h2>
      </BarItem>
    );

  return (
    <div className="app">
      <nav>
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
      <main>
        <Router routes={getRoutes()} />
      </main>
    </div>
  );
}

export default App;
