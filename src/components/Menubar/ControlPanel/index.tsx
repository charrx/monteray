import Option, { OptionProps, OptionType } from "./Option";
import styles from "../../../styles/ControlPanel.module.scss";

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
  return (
    <div className={styles.menu}>
      <div className={styles.hello}>
        {OptionsList.map((option) => {
          return (
            <div key={option.type}>
              <Option {...option} />
            </div>
          );
        })}
      </div>
      <div className={styles.hello}>
        {OptionsList.map((option) => {
          return (
            <div key={option.type}>
              <Option {...option} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ControlPanel;
