import { useRef } from "react";
import Draggable from "react-draggable";
import styles from "../../styles/Finder.module.scss";
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
      <div className={styles.finder_window_container} ref={nodeRef}>
        <div className={styles.finder_window_header}>
          <ActionButtons closeWindowHandler={closeWindowHandler} />
        </div>
      </div>
    </Draggable>
  );
};

export default Finder;
