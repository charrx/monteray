import { useReducer } from "react";
import styles from "./MenuBar.module.scss";
import svg from "../../assets/images/appleicon.svg";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useReducer((isOpen) => !isOpen, false);

  const dateAndTime = new Date();
  const date = dateAndTime.toDateString();
  const time = dateAndTime.toLocaleTimeString();

  return (
    <div className={styles.menubar}>
      <button onClick={setIsOpen}>
        <img src={svg} alt="apple logo"></img>
      </button>
      <div className={`switch ${isOpen ? styles.menu : styles.hidden}`}>
        <p>About this mac</p>
        <hr></hr>
        <p>Lock screen</p>
      </div>
      {/* <p className={styles.time}>{date}</p>
      <p className={styles.time}>{time}</p> */}
    </div>
  );
};

export default MenuBar;
