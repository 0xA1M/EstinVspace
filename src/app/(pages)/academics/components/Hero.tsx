import styles from "./styles/hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Study</h1>
      <p className={styles.subtitle}>
        Well-curated collection of study resources is essential for achieving
        success!
      </p>
    </section>
  );
}

export default Hero;
