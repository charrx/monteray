import { useState } from "react";
import desktop from "../../assets/images/desktop.jpg";
import { IoArrowForwardSharp } from "react-icons/io5";
import styles from "../../styles/Lockscreen.module.scss";

interface Props {
  handleAppContext: () => void;
}

const LockScreen = ({ handleAppContext }: Props) => {
  const adminPassword = "admin"; // This can be changed to whatever you want.
  const [password, setPassword] = useState("");
  const [isInvalidForm, setIsInvalidForm] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleFormValidation = () => {};

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    if (password === adminPassword) {
      handleAppContext();
    }
  };

  return (
    <div className={styles.lockscreen_container}>
      <img className={styles.user_img} src={desktop} alt="user icon"></img>
      <h1 className={styles.user_name}>Admin</h1>
      <form className="block" onSubmit={submit}>
        <div className={styles.login_container}>
          <input
            className={styles.login_input_field}
            type="password"
            onChange={handleOnChange}
            placeholder="Enter Password"
          ></input>
          <div className={styles.login_button_container}>
            <button className={styles.login_button}>
              <IoArrowForwardSharp />
            </button>
          </div>
        </div>
      </form>
      <p className={styles.login_info_text}>Touch ID or Enter Password</p>
    </div>
  );
};

export default LockScreen;
