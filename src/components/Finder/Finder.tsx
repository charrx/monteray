import { useRef } from "react";
import Draggable from "react-draggable";

const Finder = () => {
  //   If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
  //   Unfortunately, in order for <Draggable> to work properly, we need raw access
  //   to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`.

  const nodeRef = useRef(null);
  return (
    <Draggable defaultPosition={{ x: 50, y: 50 }} nodeRef={nodeRef}>
      <div
        className="flex flex-row w-6/12 h-3/6 bg-white rounded-xl -z-10 shadow-2xl"
        ref={nodeRef}
      >
        <div className="flex w-36 h-full bg-stone-200 rounded-tl-xl rounded-bl-xl">
          <div className="flex ml-5 mt-5 gap-2">
            <button className="w-3 h-3 bg-red-500 rounded-full"></button>
            <button className="w-3 h-3 bg-yellow-500 rounded-full"></button>
            <button className="w-3 h-3 bg-green-500 rounded-full"></button>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Finder;
