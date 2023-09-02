import { useRef } from "react";
import Draggable from "react-draggable";
import ActionButtons from "../ActionButtons";

interface Props {
  closeWindowHandler: () => void;
}

const Finder = ({ closeWindowHandler }: Props) => {
  //   If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
  //   Unfortunately, in order for <Draggable> to work properly, we need raw access
  //   to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`.
  const nodeRef = useRef(null);

  return (
    <Draggable defaultPosition={{ x: 50, y: 50 }} nodeRef={nodeRef}>
      <div
        className="flex w-1/2 h-1/2 bg-white rounded-xl -z-10 shadow-2xl"
        ref={nodeRef}
      >
        <div className="w-36 h-full flex bg-windowBackground rounded-l-xl">
          <ActionButtons closeWindowHandler={closeWindowHandler} />
        </div>
      </div>
    </Draggable>
  );
};

export default Finder;
