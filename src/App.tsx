import { useState } from "react";
import Desktop from "./components/context/Desktop";
import LockScreen from "./components/context/LockScreen";

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleAppContext = () => {
    setIsUnlocked(!isUnlocked);
  };

  return (
    <>
      {isUnlocked ? (
        <Desktop handleAppContext={handleAppContext} />
      ) : (
        <LockScreen handleAppContext={handleAppContext} />
      )}
    </>
  );
}

export default App;
