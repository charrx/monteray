import { useReducer } from "react";
import styles from "../../../styles/Option.module.scss";
import CircularButton from "./CircularButton";

export enum OptionType {
  WIFI = "wifi",
  BLUETOOTH = "bluetooth",
  AIRDROP = "airdrop",
}

export interface OptionProps {
  type: OptionType;
  name: string;
  activeText: string;
  inactiveText: string;
}

const Option = ({ type, name, activeText, inactiveText }: OptionProps) => {
  const [isActive, setIsActive] = useReducer((isActive) => !isActive, true);

  return (
    <div className={styles.option_container} onClick={setIsActive}>
      <CircularButton type={type} isActive={isActive} />
      <div className={styles.option_info_container}>
        <p className={styles.option_name}>{name}</p>
        <p className={styles.option_status}>
          {isActive ? activeText : inactiveText}
        </p>
      </div>
    </div>
  );
};

export default Option;
