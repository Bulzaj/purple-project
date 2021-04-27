import { SET_VIEWBOX_POSITION } from "./actions";

const initState = {
  position: {
    x: 0,
    y: 0,
  },
  dimmension: {
    width: 800,
    height: 800,
  },
};

const viewboxReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_VIEWBOX_POSITION:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default viewboxReducer;
