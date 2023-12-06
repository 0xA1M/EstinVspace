"use client";
/* Dependencies */
import { useTheme } from "next-themes";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useEffect, useState } from "react";

/* Assets */
import LogoDark from "@/images/logo.svg";
import LogoLight from "@/images/logo-light.svg";
import styles from "./styles/logo.module.css";

/* Render the Logo */
function Logo() {
  const [src, setSrc] = useState<string | StaticImport>(
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  );
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    switch (resolvedTheme) {
      case "light":
        setSrc(LogoDark);
        break;
      case "dark":
        setSrc(LogoLight);
        break;
    }
  }, [resolvedTheme]);

  return (
    <Image
      src={src}
      alt="EstinVspace"
      className={styles.logo}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAD0lEQVR42mNkwAIYh7IgAAVVAAuInjI5AAAAAElFTkSuQmCC"
      width="79"
      height="58"
    />
  );
}

export default Logo;
