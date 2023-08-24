import styles from "../styles/ActionButtons.module.scss";

interface Props {
  closeWindowHandler: () => void;
}

const ActionButtons = ({ closeWindowHandler }: Props) => {
  return (
    <div className={styles.action_buttons_container}>
      <button
        className={`${styles.action_button} ${styles.close}`}
        onClick={closeWindowHandler}
      ></button>
      <button className={`${styles.action_button} ${styles.minimize}`}></button>
      <button className={`${styles.action_button} ${styles.expand}`}></button>
    </div>
  );
};

export default ActionButtons;
