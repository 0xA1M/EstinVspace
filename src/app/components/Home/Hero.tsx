/* Dependencies */
import Image from "next/image";

/* Assets */
import styles from "./styles/hero.module.css";
import PinkWave from "@/images/pink.svg";
import Rocket from "@/images/Rocket.svg";
import RocketFire from "@/images/Rocket-fire.svg";
import BlueWave from "@/images/blue.svg";

/* Hero Section of the Home */
function Hero() {
  return (
    <section className={styles.hero}>
      <Image src={PinkWave} alt="" aria-hidden="true" />
      <div className={styles.rocketContainer}>
        <Image
          src={Rocket}
          alt=""
          className={styles.rocket}
          aria-hidden="true"
        />
        <Image
          src={RocketFire}
          alt=""
          className={styles.rocketFire}
          aria-hidden="true"
        />
      </div>
      <Image
        src={BlueWave}
        alt=""
        className={styles.blueWave}
        aria-hidden="true"
      />

      <h1 className={styles.title}>
        <span className={styles.titleLogo}>
          <span>ESTIN</span>
          <span className={styles.blueText}>V-Space</span>
        </span>
        <span className={styles.titleQuote}>
          Ignite Your Learning Odyssey To The Stars
        </span>
      </h1>

      <h2 className={styles.subTitle}>
        V-Space is your gateway to a vast world of knowledge, where you can
        explore self-development and refine your skills. Our extensive content
        empowers you to apply what you learn, fostering personal and
        professional growth.
      </h2>
    </section>
  );
}

export default Hero;
