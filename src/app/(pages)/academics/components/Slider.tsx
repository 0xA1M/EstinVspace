"use client";
/* Dependencies */
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

/* Assets */
import styles from "./styles/slider.module.css";
import type { Modules } from "@/lib/module";

interface Params {
  modules: Modules;
  isVisible: boolean;
}

function Slider({ modules, isVisible }: Params) {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchMove, setTouchMove] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setStartIndex(0);
    setVisibleCards([0, 1, 2, 3]);
  }, [isVisible]);

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (touchStart !== null) {
        setTouchMove(e.touches[0].clientX);
      }
    };

    const handleTouchEnd = () => {
      if (touchStart !== null && touchMove !== null && sliderRef.current) {
        const diff = touchStart - touchMove;
        if (Math.abs(diff) > 50) {
          const direction = diff > 0 ? "forward" : "backward";
          shiftCards(direction);
        }
      }
      setTouchStart(null);
      setTouchMove(null);
    };

    if (sliderRef.current) {
      sliderRef.current.addEventListener("touchmove", handleTouchMove);
      sliderRef.current.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener("touchmove", handleTouchMove);
        sliderRef.current.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [touchStart, touchMove]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX);
  };

  const shiftCards = (direction: "forward" | "backward") => {
    const modulesLength = modules.length;
    const cardsPerPage = 4;

    let shiftIndex =
      direction === "forward"
        ? touchMove || touchStart
          ? startIndex + cardsPerPage
          : (startIndex + cardsPerPage) % modulesLength
        : startIndex - cardsPerPage;

    if (shiftIndex < 0) {
      shiftIndex = 0;
    } else if (shiftIndex > modulesLength - 4) {
      shiftIndex = modulesLength - cardsPerPage;
    }

    const updatedVisibleCards: number[] = [];
    for (let i = shiftIndex; i < shiftIndex + cardsPerPage; i++) {
      updatedVisibleCards.push(i % modulesLength);
    }

    setVisibleCards(updatedVisibleCards);
    setStartIndex(shiftIndex);
  };

  const transformStyle = {
    transform: `translateX(-${startIndex * 22}%)`,
  };

  return (
    <div
      className={styles.slider}
      ref={sliderRef}
      onTouchStart={handleTouchStart}
    >
      <div className={styles.cardsWrapper} style={transformStyle}>
        {modules.map((module, index) => (
          <article
            key={index}
            className={`${styles.card} ${
              visibleCards.includes(index) ? styles.active : ""
            }`}
          >
            <Image
              src={module.img}
              alt={module.name}
              className={styles.cardImg}
            />
            <h3 className={styles.cardDetails}>
              <Link href={module.link}>{module.name}</Link>
            </h3>
          </article>
        ))}
      </div>

      <button
        className={`${styles.leftArrow} ${
          startIndex === 0 ? styles.hidden : ""
        }`}
        onClick={() => shiftCards("backward")}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12H18M6 12L11 7M6 12L11 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        className={styles.rightArrow}
        onClick={() => shiftCards("forward")}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12H18M18 12L13 7M18 12L13 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default Slider;
