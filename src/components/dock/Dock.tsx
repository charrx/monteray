import trashcan from "../../assets/images/trashcan.svg";
import DockItem from "./DockItem";

const Dock = () => {
  return (
    <div className="flex w-full content-end justify-center absolute bottom-0 m-6">
      <div className="bg-white bg-opacity-40 rounded-2xl p-2 border-solid border-1 border-white border-opacity-50">
        <DockItem icon={trashcan} />
      </div>
    </div>
  );
};

export default Dock;
