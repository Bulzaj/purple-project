import { combineReducers, createStore } from "redux";
import projectReducer from "./projectReducer";
import canvasReducer from "./canvasReducer";

const rootReducer = combineReducers({
  project: projectReducer,
  canvas: canvasReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
