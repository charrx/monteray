import { useReducer } from "react";
import Dock from "../Dock/Dock";
import Finder from "../Finder/Finder";
import MenuBar from "../Menubar/MenuBar";
import styles from "../../styles/Desktop.module.scss";

interface Props {
  handleAppContext: () => void;
}

const Desktop = ({ handleAppContext }: Props) => {
  const [finderStatus, setFinderStatus] = useReducer(
    (finderStatus) => !finderStatus,
    false
  );

  return (
    <div className={styles.desktop_container}>
      <MenuBar handleAppContext={handleAppContext}></MenuBar>
      {!finderStatus && <Finder />}
      <Dock handleOpenFinder={setFinderStatus}></Dock>
    </div>
  );
};

export default Desktop;
