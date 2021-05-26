import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setCanvasPosition } from "../store/actions";

// Manipulate canvas position attribute state with mouse events
const usePanning = () => {
  // redux hooks
  const position = useSelector((state) => state.canvas.position);
  const dispatch = useDispatch();

  // false when left mouse key is up
  const [isPanning, setIsPanning] = useState(false);

  // on mouse key down handler
  // set initial state only
  const handleMouseDown = (e) => {
    setIsPanning(true);
  };

  // on mouse move handler
  // update canvas position state only when left key is pressed
  const handleMouseMove = (e) => {
    if (!isPanning) return;
    dispatch(
      setCanvasPosition({
        x: position.x + e.movementX,
        y: position.y + e.movementY,
      })
    );
  };

  // on mouse key up handler
  // set is drawing
  // update previous canvas position on finish
  const handleMouseUp = () => {
    setIsPanning(false);
  };

  return {
    position,
    handlers: {
      handleMouseDown,
      handleMouseMove,
      handleMouseUp,
    },
  };
};

export default usePanning;
