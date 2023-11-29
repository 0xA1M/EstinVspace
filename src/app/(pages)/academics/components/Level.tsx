/* Components */
import Card from "./Card";

/* Assets */
import styles from "./styles/level.module.css";

function Level() {
  return (
    <section className={styles.section}>
      <h1>1CP</h1>

      <Card />
    </section>
  );
}

export default Level;
