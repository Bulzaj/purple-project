export const LOAD_PROJECT = "LOAD_PROJECT";
export const SET_CANVAS = "SET_CANVAS";
export const SET_CANVAS_POSITION = "SET_CANVAS_POSITION";
export const SET_CANVAS_SCALE = "SET_CANVAS_SCALE";

export const loadProject = (project) => {
  return {
    type: LOAD_PROJECT,
    payload: {
      isLoaded: true,
      ...project,
    },
  };
};

// set new Canvas position and scale
export const setCanvas = (position, scale) => {
  return {
    type: SET_CANVAS,
    payload: {
      position,
      scale,
    },
  };
};

// set new canvas position
export const setCanvasPosition = (position) => {
  return {
    type: SET_CANVAS_POSITION,
    payload: {
      position,
    },
  };
};

// set new Canvas scale
export const setCanvasScale = (scale) => {
  return {
    type: SET_CANVAS_SCALE,
    payload: {
      scale,
    },
  };
};
