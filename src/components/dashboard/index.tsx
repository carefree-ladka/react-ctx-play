import Card from "./Card";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <section className={styles.content}>
      <div className={styles["content-card"]}>
        <Card />
      </div>
    </section>
  );
}
