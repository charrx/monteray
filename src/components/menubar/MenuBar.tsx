import { useReducer } from "react";
import styles from "./MenuBar.module.scss";
import svg from "../../assets/images/appleicon.svg";
import Menu from "../menu/Menu";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useReducer((isOpen) => !isOpen, false);

  return (
    <div className={styles.menubar}>
      <button className={styles.icon} onClick={setIsOpen}>
        <img src={svg} alt="apple logo"></img>
      </button>

      {/* implement menu component */}
      <Menu isOpen={isOpen} />
    </div>
  );
};

export default MenuBar;
