"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";

import styles from "./styles/section.module.css";

interface Params {
  vidSrc: {
    light: string;
    dark: string;
  };
}

function Video({ vidSrc }: Params) {
  const { resolvedTheme } = useTheme();
  const { light, dark } = vidSrc;

  const videoSource = resolvedTheme === "light" ? light : dark;

  console.log(resolvedTheme);

  return (
    <video
      src={videoSource}
      className={styles.animation}
      loop
      autoPlay
      aria-hidden
    ></video>
  );
}

export default Video;
