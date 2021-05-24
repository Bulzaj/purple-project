import { useEffect, useRef } from "react";

// set and remove event listener on DOM element
const useEventLisener = (eventName, handler, element) => {
  // reference for handler function
  const savedHandler = useRef();

  // reset handler function
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // checks if element supports events listening
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    // create event listener
    element.addEventListener(eventName, (e) => savedHandler.current(e));

    // remove event listener
    return element.removeEventListener(eventName, (e) =>
      savedHandler.current(e)
    );
  }, [eventName, element]);
};

export default useEventLisener;
