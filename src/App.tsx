import Dock from "./components/dock/Dock";
import MenuBar from "./components/menubar/MenuBar";
import styles from "./styles/App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <MenuBar></MenuBar>
      <Dock></Dock>
    </div>
  );
}

export default App;
