import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setViewboxPosition } from "../store/actions";

// Manipulate viewBox position attribute state with mouse events
// Get mouse position from svg element reference
const usePanning = () => {
  // redux hooks
  const position = useSelector((state) => state.viewbox);
  const dispatch = useDispatch();

  // referenco to previous position
  const prevPositionRef = useRef(position.position);

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
  // update viewbox position state only when left key is pressed
  const handleMouseMove = (e) => {
    if (!isPanning) return;
    const deltaX = e.clientX - mouseStart.x;
    const deltaY = e.clientY - mouseStart.y;
    dispatch(
      setViewboxPosition({
        x: prevPositionRef.current.x + deltaX,
        y: prevPositionRef.current.y + deltaY,
      })
    );
  };

  // on mouse key up handler
  // set is drawing
  // update previous viewbox position on finish
  const handleMouseUp = () => {
    setIsPanning(false);
    prevPositionRef.current = position.position;
  };

  return {
    ...position,
    handlers: {
      handleMouseDown,
      handleMouseMove,
      handleMouseUp,
    },
  };
};

export default usePanning;
