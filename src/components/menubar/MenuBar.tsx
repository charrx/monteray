import { useReducer } from "react";
import styles from "./MenuBar.module.scss";

const MenuBar = () => {
  const [isHidden, setIsHidden] = useReducer((isHidden) => !isHidden, true);

  const dateAndTime = new Date();
  const date = dateAndTime.toDateString();
  const time = dateAndTime.toLocaleTimeString();

  return (
    <div className={styles.menubar}>
      <button onClick={setIsHidden}>Apple</button>
      <div className={`switch ${isHidden ? styles.hidden : styles.menu}`}>
        <p>About this mac</p>
        <hr></hr>
        <p>Lock screen</p>
      </div>
      <p className={styles.time}>{date}</p>
      <p className={styles.time}>{time}</p>
    </div>
  );
};

export default MenuBar;
