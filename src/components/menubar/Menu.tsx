interface Props {
  handleAppContext: () => void;
  handleOpenAboutThisMac: () => void;
}

const Menu = ({ handleAppContext, handleOpenAboutThisMac }: Props) => {
  return (
    <div className="flex flex-col w-60 p-1 my-2 text-xs border border-solid border-black/20 bg-white/50 backdrop-blur-3xl rounded-xl absolute top-4 left-2 gap-1">
      <button
        className=" w-full h-6 rounded px-3 hover:bg-highlighter hover:text-white"
        onClick={handleOpenAboutThisMac}
      >
        <p className="capitalize text-left">About this mac</p>
      </button>
      <hr className="mx-3"></hr>
      <button
        className="w-full h-6 rounded px-3 hover:bg-highlighter hover:text-white"
        onClick={handleAppContext}
      >
        <p className="capitalize text-left">Lock screen</p>
      </button>
    </div>
  );
};

export default Menu;
