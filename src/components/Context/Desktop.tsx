import Dock from "../Dock/Dock";
import MenuBar from "../menubar/MenuBar";

interface Props {
  handleContext: () => void;
}

const Desktop = ({ handleContext }: Props) => {
  return (
    <div className="w-full h-full bg-[url('./assets/images/desktop.jpg')] bg-center bg-no-repeat bg-cover overflow-hidden relative">
      <MenuBar handleContext={handleContext}></MenuBar>
      <Dock></Dock>
    </div>
  );
};

export default Desktop;
