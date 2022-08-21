import { useState } from "react";
import Dock from "../Dock/Dock";
import Finder from "../Finder/Finder";
import MenuBar from "../Menubar/MenuBar";

interface Props {
  handleAppContext: () => void;
}

const Desktop = ({ handleAppContext }: Props) => {
  const [isFinderOpen, setIsFinderOpen] = useState(false);

  const handleOpenFinder = () => {
    setIsFinderOpen(true);
  };

  return (
    <div className="w-full h-full bg-[url('./assets/images/desktop.jpg')] bg-center bg-no-repeat bg-cover overflow-hidden relative">
      <MenuBar handleAppContext={handleAppContext}></MenuBar>
      {isFinderOpen && <Finder />}
      <Dock handleOpenFinder={handleOpenFinder}></Dock>
    </div>
  );
};

export default Desktop;
