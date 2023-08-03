import { NavLink } from "react-router-dom";
import { bodyIcons } from "../../utils/icons";
import { links } from "../../utils";
import styles from "./LeftSidebar.module.css";

export default function LeftSidebar() {
  return (
    <section className={styles.leftSidebar}>
      <ul>
        {links.map((link, idx) => (
          <NavLink
            to={`/${link}`}
            key={link}
            className={({ isActive }) => {
              return isActive
                ? `${styles["leftSidebar-link"]} ${styles["leftSidebar-link-active-link"]}`
                : `${styles["leftSidebar-link"]}`;
            }}
          >
            <p className={styles["icon"]}>{bodyIcons[idx]}</p>
            <span className={styles["text"]}> {link}</span>
          </NavLink>
        ))}
      </ul>
    </section>
  );
}
