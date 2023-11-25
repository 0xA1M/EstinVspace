/* Dependencies */
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

/* Assets */
import styles from "./styles/navbar.module.css";

/* Navigation for the website located in Header */
function NavBar() {
  const pathname = usePathname();
  const searchBarRef = useRef<HTMLLIElement>(null);
  const searchBarInputRef = useRef<HTMLInputElement>(null);
  const navListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const toggleSearchBar = (): void => {
      searchBarRef.current?.classList.toggle(styles.active);
      navListRef.current?.classList.toggle(styles.left);

      if (searchBarRef.current?.classList.contains(styles.active)) {
        console.log("input focused");
        searchBarInputRef.current?.focus();
      }
    };

    const clickHandler = (event: MouseEvent): void => {
      if (searchBarRef.current?.contains(event.target as HTMLElement)) {
        if (
          document
            .querySelector("#Search")
            ?.contains(event.target as HTMLElement)
        ) {
          toggleSearchBar();
        }
      } else {
        searchBarRef.current?.classList.remove(styles.active);
        navListRef.current?.classList.remove(styles.left);
      }
    };

    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <nav className={styles.mainNav}>
      <ul className={`${styles.navItemList}`} ref={navListRef}>
        <li
          className={`${styles.navItem} ${styles.item0} ${
            pathname === "/" ? styles.activeLink : ""
          }`}
        >
          <Link href="/" className={styles.navItemLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className={styles.icon}
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="myGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" style={{ stopColor: "#1ecdf4" }} />
                  <stop offset="100%" style={{ stopColor: "#ba06f9cf" }} />
                </linearGradient>
              </defs>

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                style={{
                  stroke:
                    pathname === "/" ? "url(#myGradient)" : "currentColor",
                }}
              />
            </svg>

            <p>Home</p>
          </Link>
        </li>
        <li
          className={`${styles.navItem} ${styles.item1} ${
            pathname === "/academics" ? styles.activeLink : ""
          }`}
        >
          <Link href="/academics" className={styles.navItemLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className={styles.icon}
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="myGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" style={{ stopColor: "#1ecdf4" }} />
                  <stop offset="100%" style={{ stopColor: "#ba06f9cf" }} />
                </linearGradient>
              </defs>

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                style={{
                  stroke:
                    pathname === "/academics"
                      ? "url(#myGradient)"
                      : "currentColor",
                }}
              />
            </svg>
            <p>Academics</p>
          </Link>
        </li>
        <li
          className={`${styles.navItem} ${styles.item2} ${
            pathname === "/selfdev" ? styles.activeLink : ""
          }`}
        >
          <Link href="/selfdev" className={styles.navItemLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.icon}
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="myGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" style={{ stopColor: "#1ecdf4" }} />
                  <stop offset="100%" style={{ stopColor: "#ba06f9cf" }} />
                </linearGradient>
              </defs>

              <circle
                cx="12"
                cy="12"
                r="10"
                style={{
                  stroke:
                    pathname === "/selfdev"
                      ? "url(#myGradient)"
                      : "currentColor",
                }}
              ></circle>
              <polygon
                points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
                style={{
                  stroke:
                    pathname === "/selfdev"
                      ? "url(#myGradient)"
                      : "currentColor",
                }}
              ></polygon>
            </svg>
            <p>Self Dev</p>
          </Link>
        </li>
        <li
          className={`${styles.navItem} ${styles.item3} ${
            pathname === "/playground" ? styles.activeLink : ""
          }`}
        >
          <Link href="/playground" className={styles.navItemLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className={styles.icon}
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="myGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" style={{ stopColor: "#1ecdf4" }} />
                  <stop offset="100%" style={{ stopColor: "#ba06f9cf" }} />
                </linearGradient>
              </defs>

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                style={{
                  stroke:
                    pathname === "/playground"
                      ? "url(#myGradient)"
                      : "currentColor",
                }}
              />
            </svg>
            <p>Playground</p>
          </Link>
        </li>
        <li
          className={`${styles.navItem} ${styles.item4} ${
            pathname === "/about" ? styles.activeLink : ""
          }`}
        >
          <Link href="/about" className={styles.navItemLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className={styles.icon}
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="myGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" style={{ stopColor: "#1ecdf4" }} />
                  <stop offset="100%" style={{ stopColor: "#ba06f9cf" }} />
                </linearGradient>
              </defs>

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                style={{
                  stroke:
                    pathname === "/about" ? "url(#myGradient)" : "currentColor",
                }}
              />
            </svg>
            <p>About</p>
          </Link>
        </li>
        <li
          className={`${styles.navItem} ${styles.navSearchBar}`}
          ref={searchBarRef}
        >
          <input
            id="searchInput"
            type="text"
            className={styles.searchInput}
            ref={searchBarInputRef}
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={styles.searchIcon}
            id="Search"
            aria-hidden="true"
            aria-label="Search"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </li>

        <div className={styles.navItemHighlighter}></div>
      </ul>
    </nav>
  );
}

export default NavBar;
