import { Airdrop, Wifi, Moon } from "../Icons";
import styles from "../../../styles/CircularButton.module.scss";
import { OptionType } from "./Option";

interface Props {
  type: OptionType;
  isActive: boolean;
}

const CircularButton = ({ type, isActive }: Props) => {
  const iconRecord: { [key in OptionType]: JSX.Element } = {
    [OptionType.WIFI]: <Wifi />,
    [OptionType.BLUETOOTH]: <Wifi />,
    [OptionType.AIRDROP]: <Airdrop />,
    [OptionType.DARKMODE]: <Moon />,
  };

  return (
    <button
      className={`${styles.circular_button} ${isActive ? styles.active : ""}`}
    >
      {iconRecord[type]}
    </button>
  );
};

export default CircularButton;
