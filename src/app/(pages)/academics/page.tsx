import Image from "next/image";

/* Components */
import Level from "./components/Level";

/* Assets */
import BGPic from "@/images/BGpec-01.webp";
import BGPicDark from "@/images/BGpecDark-01.webp";

import styles from "./academics.module.css";

function Academics() {
  return (
    <>
      <Image src={BGPicDark} alt="" />
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
