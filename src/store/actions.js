export const LOAD_PROJECT = "LOAD_PROJECT";

export const loadProject = (project) => {
  return {
    type: LOAD_PROJECT,
    payload: {
      isLoaded: true,
      ...project,
    },
  };
};
