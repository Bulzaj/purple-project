import { useSelector, useDispatch } from "react-redux";
import { setCanvas } from "../store/actions";

// Manipulate canvas position and scale attribute state with mouse wheel event
const useZooming = (mousePosition, factor = 1.1) => {
  // redux hooks
  const position = useSelector((state) => state.canvas.position);
  const scale = useSelector((state) => state.canvas.scale);
  const dispatch = useDispatch();

  // on wheel handler
  const handleWheel = (e) => {
    const newScale = e.deltaY > 0 ? scale * factor : scale / factor;
    const newTX =
      mousePosition.x - ((mousePosition.x - position.x) * newScale) / scale;
    const newTY =
      mousePosition.y - ((mousePosition.y - position.y) * newScale) / scale;

    dispatch(setCanvas({ x: newTX, y: newTY }, newScale));
  };

  return {
    handlers: { handleWheel },
  };
};

export default useZooming;
