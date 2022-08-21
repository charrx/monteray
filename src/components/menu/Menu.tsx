import { useContext } from "react";
import styles from "./Menu.module.scss";

interface Props {
  isOpen: boolean;
  handleContext: () => void;
}

const Menu = ({ isOpen, handleContext }: Props) => {
  return (
    <div className={`switch ${isOpen ? styles.menu : styles.hidden}`}>
      <p>About this mac</p>
      <hr></hr>
      <button onClick={handleContext}>
        <p>Lock screen</p>
      </button>
    </div>
  );
};

export default Menu;
