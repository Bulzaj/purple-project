import { useSelector, useDispatch } from "react-redux";

// TODO: zoom to cursor instead top left corner
// TODO: mouse position is not initiated at start (need click or something like that)
// Manipulate canvas position and dimmension attribute state with mouse wheel event
const useZooming = (mousePosition, zoomRatio = 0.3) => {
  //redux hooks
  const dimmension = useSelector((state) => state.canvas.dimmension);
  const position = useSelector((state) => state.canvas.position);
  const dispatch = useDispatch();

  // wheel event handler
  // set new dimmension and center position to cursor
  const handleOnWheel = (event) => {
    const delta = event.deltaY * zoomRatio;
    if (dimmension.width + delta < 1 || dimmension.height + delta < 1) return;
  };

  return {
    dimmension,
    handlers: { handleOnWheel },
  };
};

export default useZooming;
