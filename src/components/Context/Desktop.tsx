import Dock from "../Dock/Dock";
import MenuBar from "../Menubar/MenuBar";

interface Props {
  handleAppContext: () => void;
}

const Desktop = ({ handleAppContext }: Props) => {
  return (
    <div className="w-full h-full bg-[url('./assets/images/desktop.jpg')] bg-center bg-no-repeat bg-cover overflow-hidden relative">
      <MenuBar handleAppContext={handleAppContext}></MenuBar>
      <Dock></Dock>
    </div>
  );
};

export default Desktop;
