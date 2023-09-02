import { useReducer } from "react";
import Dock from "../dock/Dock";
import Finder from "../finder/Finder";
import MenuBar from "../menubar/MenuBar";
import AboutThisMac from "../menubar/AboutThisMac";

interface Props {
  handleAppContext: () => void;
}

const Desktop = ({ handleAppContext }: Props) => {
  const [finderStatus, setFinderStatus] = useReducer(
    (finderStatus) => !finderStatus,
    false
  );

  const [aboutThisMacStatus, setAboutThisMacStatus] = useReducer(
    (aboutThisMacStatus) => !aboutThisMacStatus,
    false
  );

  return (
    <div className="w-full h-full bg-mac-desktop bg-center bg-no-repeat bg-cover overflow-hidden relative">
      <MenuBar
        handleAppContext={handleAppContext}
        handleOpenAboutThisMac={setAboutThisMacStatus}
      ></MenuBar>
      {aboutThisMacStatus && (
        <AboutThisMac closeWindowHandler={setAboutThisMacStatus} />
      )}
      {finderStatus && <Finder closeWindowHandler={setFinderStatus} />}
      <Dock handleOpenFinder={setFinderStatus}></Dock>
    </div>
  );
};

export default Desktop;
