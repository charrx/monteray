import styles from "./Menu.module.scss";

interface Props {
  isOpen: boolean;
  handleAppContext: () => void;
}

const Menu = ({ isOpen, handleAppContext }: Props) => {
  return (
    <div className={`switch ${isOpen ? styles.menu : styles.hidden}`}>
      <p>About this mac</p>
      <hr></hr>
      <button onClick={handleAppContext}>
        <p>Lock screen</p>
      </button>
    </div>
  );
};

export default Menu;
