"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useEffect, useState } from "react";

import LogoDark from "@/images/logo.svg";
import LogoLight from "@/images/logo-light.svg";

function Logo() {
  const [src, setSrc] = useState<string | StaticImport>(
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  );
  const { resolvedTheme } = useTheme();
  const styles = {
    width: "100%",
    height: "75%",
  };

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
    <Image src={src} alt="EstinVspace" style={styles} width={79} height={58} />
  );
}

export default Logo;
