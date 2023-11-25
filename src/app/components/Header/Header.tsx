"use client";
/* Dependencies */
import { Suspense, useEffect, useState } from "react";

/* Components */
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import NavBar from "./NavBar";

/* Assets */
import styles from "./styles/header.module.css";

/* Header */
function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  // UseRef to toggle the header visibility
  // Remove the transition when the scrollPos == 0

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const currentScrollPos = window.scrollY;
        const atTopOfPage = currentScrollPos === 0;

        // Set visible to true if at the top or scrolling up
        setVisible(atTopOfPage || prevScrollPos > currentScrollPos);

        setPrevScrollPos(currentScrollPos);
      }, 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`${styles.header} ${visible ? styles.visible : styles.hidden}`}
    >
      <Logo />
      <NavBar />
      <ThemeToggler />
    </header>
  );
}

export default Header;
