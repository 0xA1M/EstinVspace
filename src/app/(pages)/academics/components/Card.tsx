/* Dependencies */
import Link from "next/link";

/* Assets */
import styles from "./styles/card.module.css";

interface Params {
  moduleName: string;
  driveUrl?: string;
}

function Card({ moduleName, driveUrl = "https://google.com" }: Params) {
  return (
    <article className={styles.cardBody}>
      <h3 className={styles.moduleDetails}>
        <Link href={driveUrl}>{moduleName}</Link>
      </h3>
    </article>
  );
}

export default Card;
