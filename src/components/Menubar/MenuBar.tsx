import { useReducer } from "react";
import styles from "../../styles/MenuBar.module.scss";
import svg from "../../assets/images/appleicon.svg";
import Menu from "./Menu";
import Clock from "./Clock";
import { Switch, Wifi } from "./Icons";
import ControlPanel from "./ControlPanel";

interface Props {
  handleAppContext: () => void;
  handleOpenAboutThisMac: () => void;
}

const MenuBar = ({ handleAppContext, handleOpenAboutThisMac }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useReducer(
    (isMenuOpen) => !isMenuOpen,
    false
  );

  const [isControlPanelOpen, setIsControlPanelOpen] = useReducer(
    (isControlPanelOpen) => !isControlPanelOpen,
    false
  );

  return (
    <div className={styles.menubar_container}>
      <div className={styles.leftside_container}>
        <button className={styles.icon} onClick={setIsMenuOpen}>
          <img src={svg} alt="apple logo"></img>
        </button>

        {isMenuOpen && (
          <Menu
            handleAppContext={handleAppContext}
            handleOpenAboutThisMac={handleOpenAboutThisMac}
          />
        )}
      </div>
      <div className={styles.rightside_container}>
        <div className={styles.icon_container}>
          <div>
            <Wifi />
          </div>
          <button
            className={styles.rightside_icon}
            onClick={setIsControlPanelOpen}
          >
            <Switch />
          </button>
          {isControlPanelOpen && <ControlPanel />}
        </div>
        <div className={styles.date_container}>
          <Clock />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
