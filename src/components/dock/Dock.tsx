import trashcan from "../../assets/images/trashcan.svg";
import spotify from "../../assets/images/spotify.svg";
import finder from "../../assets/images/finder.svg";
import DockItem from "./DockItem";
import styles from "../../styles/Dock.module.scss";

interface Props {
  handleOpenFinder: () => void;
}

const Dock = ({ handleOpenFinder }: Props) => {
  return (
    <div className={styles.dock_container}>
      <div className={styles.dock_item_container}>
        <DockItem icon={finder} handleDockItem={handleOpenFinder} />
        <DockItem icon={spotify} />
        <div className={styles.seperator}></div>
        <DockItem icon={trashcan} />
      </div>
    </div>
  );
};

export default Dock;
