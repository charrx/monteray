import styles from "./Menu.module.scss";

interface Props {
  isOpen: boolean;
}

const Menu = ({ isOpen }: Props) => {
  return (
    <div className={`switch ${isOpen ? styles.menu : styles.hidden}`}>
      <p>About this mac</p>
      <hr></hr>
      <p>Lock screen</p>
    </div>
  );
};

export default Menu;
