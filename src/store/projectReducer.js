import { LOAD_PROJECT } from "./actions";

const initState = {
  isLoaded: false,
  projectName: "",
  pipeNetworks: Array.of({ layers: [] }),
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_PROJECT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default projectReducer;
