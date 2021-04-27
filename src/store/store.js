import { combineReducers, createStore } from "redux";
import projectReducer from "./projectReducer";
import viewboxReducer from "./viewboxReducer";

const rootReducer = combineReducers({
  project: projectReducer,
  viewbox: viewboxReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
