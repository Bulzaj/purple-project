import { SET_CANVAS, SET_CANVAS_POSITION, SET_CANVAS_SCALE } from "./actions";

const initState = {
  position: {
    x: 0,
    y: 0,
  },
  scale: 1,
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
    case SET_CANVAS_SCALE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default canvasReducer;
