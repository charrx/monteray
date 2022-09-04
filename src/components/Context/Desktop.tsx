import { useReducer } from "react";
// import Dock from "../Dock/Dock";
import Finder from "../Finder/Finder";
import MenuBar from "../Menubar/MenuBar";
import styles from "../../styles/Desktop.module.scss";
import AboutThisMac from "../Menubar/AboutThisMac";

interface Props {
  handleAppContext: () => void;
}

const Desktop = ({ handleAppContext }: Props) => {
  const [finderStatus, setFinderStatus] = useReducer(
    (finderStatus) => !finderStatus,
    false
  );

  const [aboutThisMacStatus, setAboutThisMacStatus] = useReducer(
    (aboutThisMacStatus) => !aboutThisMacStatus,
    false
  );

  return (
    <div className={styles.desktop_container}>
      <MenuBar
        handleAppContext={handleAppContext}
        handleOpenAboutThisMac={setAboutThisMacStatus}
      ></MenuBar>
      {aboutThisMacStatus && <AboutThisMac />}
      {finderStatus && <Finder />}
      {/* <Dock handleOpenFinder={setFinderStatus}></Dock> */}
    </div>
  );
};

export default Desktop;
