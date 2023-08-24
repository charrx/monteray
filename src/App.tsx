import { useState } from "react";
import Desktop from "./Context/Desktop";
import LockScreen from "./Context/LockScreen";

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
