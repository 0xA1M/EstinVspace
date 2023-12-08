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

  useEffect(() => {
    const videoElement = document.querySelector("video");

    if (videoElement) {
      switch (resolvedTheme) {
        case "light":
          videoElement.src = light;
          break;
        case "dark":
          videoElement.src = dark;
          break;
        default:
          break;
      }
    }
  }, [resolvedTheme, light, dark]);

  if (!light || !dark) {
    return null;
  }

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
