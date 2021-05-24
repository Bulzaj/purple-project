import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setCanvasPosition } from "../store/actions";

// Manipulate canvas position attribute state with mouse events
const usePanning = () => {
  // redux hooks
  const position = useSelector((state) => state.canvas.position);
  const dispatch = useDispatch();

  // referenco to previous position
  const prevPositionRef = useRef(position);

  // mouse position on left btn down
  const [mouseStart, setMouseStart] = useState({ x: null, y: null });

  // false when left mouse key is up
  const [isPanning, setIsPanning] = useState(false);

  // on mouse key down handler
  // set initial state only
  const handleMouseDown = (e) => {
    setIsPanning(true);
    setMouseStart((prevState) => {
      return {
        ...prevState,
        x: e.clientX,
        y: e.clientY,
      };
    });
  };

  // on mouse move handler
  // update canvas position state only when left key is pressed
  const handleMouseMove = (e) => {
    if (!isPanning) return;
    const deltaX = e.clientX - mouseStart.x;
    const deltaY = e.clientY - mouseStart.y;
    dispatch(
      setCanvasPosition({
        x: prevPositionRef.current.x - deltaX,
        y: prevPositionRef.current.y - deltaY,
      })
    );
  };

  // on mouse key up handler
  // set is drawing
  // update previous canvas position on finish
  const handleMouseUp = () => {
    setIsPanning(false);
    prevPositionRef.current = position;
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
