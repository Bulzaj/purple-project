import {
  SET_CANVAS,
  SET_CANVAS_DIMMENSION,
  SET_CANVAS_POSITION,
} from "./actions";

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

const canvasReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CANVAS:
      return {
        ...state,
        ...action.payload,
      };
    case SET_CANVAS_POSITION:
      return {
        ...state,
        ...action.payload,
      };
    case SET_CANVAS_DIMMENSION:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default canvasReducer;
