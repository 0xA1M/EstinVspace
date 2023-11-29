/* Components */
import Level from "./components/Level";

/* Assets */
import styles from "./academics.module.css";

function Academics() {
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.title}>Study</h1>
        <p className={styles.subtitle}>
          Well-curated collection of study resources is essential for achieving
          success!
        </p>
      </section>

      <Level />
      <Level />
      <Level />
      <Level />
      <Level />
    </>
  );
}

export default Academics;
