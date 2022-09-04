import styles from "../../styles/DockItem.module.scss";

interface Props {
  icon: string;
  handleDockItem?: () => void;
}

const DockItem = ({ icon, handleDockItem }: Props) => {
  return (
    <div>
      <button className={styles.dock_item_btn} onClick={handleDockItem}>
        <img className={styles.dock_item_icon} src={icon} alt="icon"></img>
      </button>
    </div>
  );
};

export default DockItem;
