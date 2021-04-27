export const LOAD_PROJECT = "LOAD_PROJECT";
export const SET_VIEWBOX_POSITION = "SET_VIEWBOX_POSITION";

export const loadProject = (project) => {
  return {
    type: LOAD_PROJECT,
    payload: {
      isLoaded: true,
      ...project,
    },
  };
};

export const setViewboxPosition = (position) => {
  return {
    type: SET_VIEWBOX_POSITION,
    payload: {
      position,
    },
  };
};
