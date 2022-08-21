import { useState } from "react";
import Desktop from "./Context/Desktop";
import LockScreen from "./Context/LockScreen";

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleContext = () => {
    setIsUnlocked(!isUnlocked);
  };

  return (
    <>
      {isUnlocked ? (
        <Desktop handleContext={handleContext} />
      ) : (
        <LockScreen handleContext={handleContext} />
      )}
    </>
  );
}

export default App;
