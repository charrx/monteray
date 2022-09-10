import { OptionProps, OptionType } from "./Option";
import styles from "../../styles/ControlPanel.module.scss";

const OptionsList: OptionProps[] = [
  {
    type: OptionType.WIFI,
    name: "Wi-Fi",
    activeText: "On",
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
  return <div className={styles.menu}>hekko</div>;
};

export default ControlPanel;
