import { useRef } from "react";
import lockscreen from "../../assets/images/lockscreen.jpg";
import Draggable from "react-draggable";
import styles from "../../styles/AboutThisMac.module.scss";
import ActionButtons from "../ActionButtons";

interface Props {
  closeWindowHandler: () => void;
}

const AboutThisMac = ({ closeWindowHandler }: Props) => {
  //   If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
  //   Unfortunately, in order for <Draggable> to work properly, we need raw access
  //   to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`.
  const nodeRef = useRef(null);
  return (
    <Draggable defaultPosition={{ x: 400, y: 200 }} nodeRef={nodeRef}>
      <div className={styles.container} ref={nodeRef}>
        <div className={styles.header}>
          <ActionButtons closeWindowHandler={closeWindowHandler} />
        </div>
        <div className={styles.content_container}>
          <div className={styles.logo_container}>
            <img
              className={styles.monteray_logo}
              src={lockscreen}
              alt="monteray logo"
            />
          </div>
          <div className={styles.info}>
            <div className={styles.name_container}>
              <p className={styles.name}>
                <span className={styles.bold}>macOS</span> Monteray
              </p>
              <p className={styles.version}>version 1.0.0</p>
            </div>
            <div className={styles.info_spec_container}>
              <p className={styles.general_info}>
                <span className={styles.bold}>MacBook Pro (14-inch, 2021)</span>
              </p>
              <p className={styles.general_info}>
                <span className={styles.bold}>Chip</span> Apple M1 Pro
              </p>
              <p className={styles.general_info}>
                <span className={styles.bold}>Memory</span> 16 GB
              </p>
              <p className={styles.general_info}>
                <span className={styles.bold}>Serial Number</span> 0000000000
              </p>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default AboutThisMac;
