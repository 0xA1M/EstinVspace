/* Dependencies */
import Image from "next/image";
import Link from "next/link";

/* Assets */
import styles from "./styles/section.module.css";

/* Component Params */
interface Params {
  title: string;
  description: string;
  link: string;
  linkQuote: string;
  isSelfDev?: boolean;
  vidSrc: string;
}

/* Sections of the Home */
function Section({
  title,
  description,
  link,
  linkQuote,
  isSelfDev = false,
  vidSrc,
}: Params) {
  return (
    <section className={`${styles.section} ${isSelfDev ? styles.selfdev : ""}`}>
      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <p className={styles.sectionDescription}>{description}</p>

        <Link href={link} className={styles.link} passHref>
          {linkQuote}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={styles.linkIcon}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>

      <div className={styles.animationContainer}>
        <video className={styles.animation} loop={true} autoPlay={true}>
          <source src={vidSrc} type="video/mp4" />
          Your Browser doesn't support
        </video>
      </div>
    </section>
  );
}

export default Section;
