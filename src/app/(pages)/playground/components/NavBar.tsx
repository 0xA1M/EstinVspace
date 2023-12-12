/* Dependencies */
import Link from "next/link";

/* Assets */
import styles from "./styles/navbar.module.css";

function NavBar() {
  return (
    <nav className={styles.mainNav}>
      <ul className={styles.navItemList}>
        <li className={styles.navItem}>
          <Link href="/playground/web">FrontEnd Code</Link>
        </li>

        <li className={styles.navItem}>
          <Link href="/playground/" scroll={false}>
            Code Runner
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link href="/playground/linux">Linux Terminal</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
