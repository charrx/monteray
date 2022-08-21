import { useReducer } from "react";
import styles from "./MenuBar.module.scss";
import svg from "../../assets/images/appleicon.svg";
import Menu from "../menu/Menu";

interface Props {
  handleContext: () => void;
}

const MenuBar = ({ handleContext }: Props) => {
  const [isOpen, setIsOpen] = useReducer((isOpen) => !isOpen, false);

  return (
    <div className={styles.menubar}>
      <button className={styles.icon} onClick={setIsOpen}>
        <img src={svg} alt="apple logo"></img>
      </button>

      {/* implement menu component */}
      <Menu isOpen={isOpen} handleContext={handleContext} />
    </div>
  );
};

export default MenuBar;
