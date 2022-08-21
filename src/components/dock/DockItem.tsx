interface Props {
  icon: string;
  handleDockItem?: () => void;
}

const DockItem = ({ icon, handleDockItem }: Props) => {
  return (
    <div>
      <button onClick={handleDockItem}>
        <img className="w-10 h-10" src={icon} alt="icon"></img>
      </button>
    </div>
  );
};

export default DockItem;
