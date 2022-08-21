import { useReducer } from "react";
import styles from "./MenuBar.module.scss";
import svg from "../../assets/images/appleicon.svg";
import Menu from "../menu/Menu";

interface Props {
  handleAppContext: () => void;
}

const MenuBar = ({ handleAppContext }: Props) => {
  const [isOpen, setIsOpen] = useReducer((isOpen) => !isOpen, false);

  return (
    <div className={styles.menubar}>
      <button className={styles.icon} onClick={setIsOpen}>
        <img src={svg} alt="apple logo"></img>
      </button>

      <Menu isOpen={isOpen} handleAppContext={handleAppContext} />
    </div>
  );
};

export default MenuBar;
