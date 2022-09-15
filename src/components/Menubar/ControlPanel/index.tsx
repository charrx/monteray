import Option, { OptionProps, OptionType } from "./Option";
import styles from "../../../styles/ControlPanel.module.scss";
import CircularButton from "./CircularButton";
import { useReducer } from "react";
import ScreenMirroring from "../Icons/ScreenMirroring";
import Brightness from "../Icons/Brightness";

const OptionsList: OptionProps[] = [
  {
    type: OptionType.WIFI,
    name: "Wi-Fi",
    activeText: "ForTheAlliance",
    inactiveText: "Off",
  },
  {
    type: OptionType.BLUETOOTH,
    name: "Bluetooth",
    activeText: "On",
    inactiveText: "Off",
  },
  {
    type: OptionType.AIRDROP,
    name: "AirDrop",
    activeText: "Contacts Only",
    inactiveText: "Off",
  },
];

const ControlPanel = () => {
  const [isDarkMode, setIsDarkMode] = useReducer(
    (isDarkMode: boolean) => !isDarkMode,
    false
  );

  return (
    <div className={styles.controlpanel_menu}>
      <div
        className={`${styles.left_side_container} ${styles.option_container}`}
      >
        {OptionsList.map((option) => {
          return (
            <div key={option.type}>
              <Option {...option} />
            </div>
          );
        })}
      </div>
      <div className={styles.right_side_container}>
        <div
          className={`${styles.darkmode_container} ${styles.option_container}`}
          onClick={setIsDarkMode}
        >
          <CircularButton type={OptionType.DARKMODE} isActive={!isDarkMode} />
          <p>{isDarkMode ? "Dark Mode" : "Light Mode"}</p>
        </div>
        <div className={styles.utilities_container}>
          <div
            className={`${styles.readonly_options} ${styles.option_container}`}
          >
            <div className={styles.icon_container}>
              <Brightness />
            </div>
            <p>Keyboard Brightness</p>
          </div>
          <div
            className={`${styles.readonly_options} ${styles.option_container}`}
          >
            <div className={styles.icon_container}>
              <ScreenMirroring />
            </div>
            <p>Screen Mirroring</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
