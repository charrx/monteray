import { useReducer } from "react";
import { Switch, Wifi } from "./icons";
import svg from "../../assets/images/appleicon.svg";
import Menu from "./Menu";
import Clock from "./Clock";
import ControlPanel from "./controlpanel/ControlPanel";

interface Props {
  handleAppContext: () => void;
  handleOpenAboutThisMac: () => void;
}

const MenuBar = ({ handleAppContext, handleOpenAboutThisMac }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useReducer(
    (isMenuOpen) => !isMenuOpen,
    false
  );

  const [isControlPanelOpen, setIsControlPanelOpen] = useReducer(
    (isControlPanelOpen) => !isControlPanelOpen,
    false
  );

  return (
    <div className="flex h-6 justify-between backdrop-blur-md bg-white/50 text-black px-3 relative z-10">
      <button className="bg-none border-none p-0" onClick={setIsMenuOpen}>
        <img className="flex items-center" src={svg} alt="apple logo"></img>
      </button>

      {isMenuOpen && (
        <Menu
          handleAppContext={handleAppContext}
          handleOpenAboutThisMac={handleOpenAboutThisMac}
        />
      )}
      <div className="flex items-center gap-2 text-sm">
        <div className="flex gap-2">
          <div>
            <Wifi />
          </div>
          <button className="flex items-center" onClick={setIsControlPanelOpen}>
            <Switch />
          </button>
          {isControlPanelOpen && <ControlPanel />}
        </div>
        <div className="flex text-sm">
          <Clock />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
