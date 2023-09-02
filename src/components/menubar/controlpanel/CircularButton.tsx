import { createElement } from "react";
import { Airdrop, Wifi, Moon } from "../icons";
import { OptionType } from "./OptionType";

interface Props {
  type: OptionType;
  isActive: boolean;
}

type IconType = typeof Wifi | typeof Airdrop | typeof Moon;

const iconRecord: { [key in OptionType]: IconType } = {
  [OptionType.WIFI]: Wifi,
  [OptionType.BLUETOOTH]: Wifi,
  [OptionType.AIRDROP]: Airdrop,
  [OptionType.DARKMODE]: Moon,
};

// .circular_button svg path {
//     fill: $black;
// }

// .active svg path {
//     fill: $white;
// }

const CircularButton = ({ type, isActive }: Props) => {
  return (
    <button
      className={`flex w-7 h-7 rounded-full justify-center items-center ${
        isActive ? "bg-highlighter" : "bg-windowBackground"
      }`}
    >
      {createElement(iconRecord[type])}
    </button>
  );
};

export default CircularButton;
