import { Finder, Spotify, Trashcan } from "../../assets/icons";
import DockItem from "./DockItem";

interface Props {
  handleOpenFinder: () => void;
}

const Dock = ({ handleOpenFinder }: Props) => {
  return (
    <div className="w-full flex content-end justify-center absolute bottom-0 mb-2 m-6">
      <div className="flex backdrop-blur-md bg-white/40 rounded-2xl p-2 border border-solid border-white/50">
        <DockItem icon={Finder} handleDockItem={handleOpenFinder} />
        <DockItem icon={Spotify} />
        <div className="w-px h-full bg-black/30 mx-3"></div>
        <DockItem icon={Trashcan} />
      </div>
    </div>
  );
};

export default Dock;
