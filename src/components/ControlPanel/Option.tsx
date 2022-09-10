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

const Option = () => {
  return <></>;
};

export default Option;
