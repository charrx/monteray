import { useState } from "react";
import Dock from "../Dock/Dock";
import Finder from "../Finder/Finder";
import MenuBar from "../Menubar/MenuBar";
import styles from "../../styles.Desktop.module.scss";

interface Props {
  handleAppContext: () => void;
}

const Desktop = ({ handleAppContext }: Props) => {
  const [isFinderOpen, setIsFinderOpen] = useState(false);

  const handleOpenFinder = () => {
    setIsFinderOpen(true);
  };

  return (
    <div className={styles.desktop_container}>
      <MenuBar handleAppContext={handleAppContext}></MenuBar>
      {isFinderOpen && <Finder />}
      <Dock handleOpenFinder={handleOpenFinder}></Dock>
    </div>
  );
};

export default Desktop;
