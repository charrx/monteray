import styles from "../styles/ActionButtons.module.scss";

const ActionButtons = () => {
  return (
    <div className={styles.action_buttons_container}>
      <button className={`${styles.action_button} ${styles.close}`}></button>
      <button className={`${styles.action_button} ${styles.minimize}`}></button>
      <button className={`${styles.action_button} ${styles.expand}`}></button>
    </div>
  );
};

export default ActionButtons;
