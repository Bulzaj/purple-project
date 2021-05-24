export const LOAD_PROJECT = "LOAD_PROJECT";
export const SET_CANVAS = "SET_CANVAS";
export const SET_CANVAS_POSITION = "SET_CANVAS_POSITION";
export const SET_CANVAS_DIMMENSION = "SET_CANVAS_DIMMENSION";

export const loadProject = (project) => {
  return {
    type: LOAD_PROJECT,
    payload: {
      isLoaded: true,
      ...project,
    },
  };
};

// set new Canvas position and dimmension
export const setCanvas = (position, dimmension) => {
  return {
    type: SET_CANVAS,
    payload: {
      position,
      dimmension,
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

// set new Canvas dimmensions
export const setCanvasDimmension = (dimmension) => {
  return {
    type: SET_CANVAS_DIMMENSION,
    payload: {
      dimmension,
    },
  };
};
