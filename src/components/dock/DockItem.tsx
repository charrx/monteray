interface Props {
  icon: string;
}

const DockItem = ({ icon }: Props) => {
  return (
    <div>
      <img className="w-10 h-10" src={icon} alt="icon"></img>
    </div>
  );
};

export default DockItem;
