import MenuBar from "./components/menubar/MenuBar";
import styles from "./styles/App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <MenuBar></MenuBar>
    </div>
  );
}

export default App;
