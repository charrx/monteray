import styles from "../../styles/Menu.module.scss";

interface Props {
  isOpen: boolean;
  handleAppContext: () => void;
  handleOpenAboutThisMac: () => void;
}

const Menu = ({ isOpen, handleAppContext, handleOpenAboutThisMac }: Props) => {
  return (
    <div className={`switch ${isOpen ? styles.menu : styles.hidden}`}>
      <button className={styles.btn_about} onClick={handleOpenAboutThisMac}>
        <p className="capitalize">About this mac</p>
      </button>
      <hr className={styles.divider}></hr>
      <button onClick={handleAppContext}>
        <p className="capitalize">Lock screen</p>
      </button>
    </div>
  );
};

export default Menu;