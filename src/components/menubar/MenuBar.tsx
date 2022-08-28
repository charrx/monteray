import { useReducer } from "react";
import styles from "../../styles/MenuBar.module.scss";
import svg from "../../assets/images/appleicon.svg";
import Menu from "./Menu";
import Clock from "./Clock";

interface Props {
  handleAppContext: () => void;
}

const MenuBar = ({ handleAppContext }: Props) => {
  const [isOpen, setIsOpen] = useReducer((isOpen) => !isOpen, false);

  return (
    <div className={styles.menubar_container}>
      <div>
        <button className={styles.icon} onClick={setIsOpen}>
          <img src={svg} alt="apple logo"></img>
        </button>

        <Menu isOpen={isOpen} handleAppContext={handleAppContext} />
      </div>
      <div className={styles.date_container}>
        <Clock />
      </div>
    </div>
  );
};

export default MenuBar;
