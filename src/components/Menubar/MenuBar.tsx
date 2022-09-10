import { useReducer } from "react";
import styles from "../../styles/MenuBar.module.scss";
import svg from "../../assets/images/appleicon.svg";
import Menu from "./Menu";
import Clock from "./Clock";
import Switch from "../ControlPanel/Switch";
import ControlPanel from "../ControlPanel";

interface Props {
  handleAppContext: () => void;
  handleOpenAboutThisMac: () => void;
}

const MenuBar = ({ handleAppContext, handleOpenAboutThisMac }: Props) => {
  const [isOpen, setIsOpen] = useReducer((isOpen) => !isOpen, false);

  return (
    <div className={styles.menubar_container}>
      <div className={styles.leftside_container}>
        <button className={styles.icon} onClick={setIsOpen}>
          <img src={svg} alt="apple logo"></img>
        </button>

        <Menu
          isOpen={isOpen}
          handleAppContext={handleAppContext}
          handleOpenAboutThisMac={handleOpenAboutThisMac}
        />
      </div>
      <div className={styles.rightside_container}>
        <div className={styles.icon_container}>
          <button className={styles.rightside_icon}>
            <Switch />
          </button>
          {/* <ControlPanel /> */}
        </div>
        <div className={styles.date_container}>
          <Clock />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
