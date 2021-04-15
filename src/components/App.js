import getRoutes from "../routes";
import Bar from "./bar/bar";
import BarItem from "./bar/bar-item/bar-item";
import InputFile from "./input-file/InputFile";
import Router from "./router/Router";

function App() {
  return (
    <div className="app">
      <nav>
        <Bar align="row">
          <BarItem>
            <h1>Purple Project</h1>
          </BarItem>
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
