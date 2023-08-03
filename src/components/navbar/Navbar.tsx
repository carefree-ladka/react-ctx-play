import Button from "../common/button";
import { useRCPContext } from "../../context";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { RCPState, setRCPState } = useRCPContext();
  const { isInViewMode } = RCPState;

  function handleInViewMode() {
    setRCPState((prevState) => ({
      ...prevState,
      isInViewMode: !prevState.isInViewMode,
    }));
  }
  return (
    <header>
      <nav>
        <div className={styles["navbar-content"]}>
          <h3>React Context Playground</h3>
          <Button
            className={styles.button}
            text={isInViewMode ? "Switch to Edit Mode" : "Switch to View Mode"}
            onClick={handleInViewMode}
          />
        </div>
      </nav>
    </header>
  );
}
