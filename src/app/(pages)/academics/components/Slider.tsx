"use client";
/* Dependencies */
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";

/* Assets */
import styles from "./styles/slider.module.css";
import type { Modules } from "@/lib/module";

interface Params {
  modules: Modules;
  isVisible: boolean;
  reverseSlide: boolean;
}

function Slider({ modules, isVisible, reverseSlide }: Params) {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchMove, setTouchMove] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setStartIndex(0);
    setVisibleCards(
      reverseSlide
        ? [
            modules.length - 4,
            modules.length - 3,
            modules.length - 2,
            modules.length - 1,
          ]
        : [0, 1, 2, 3]
    );
  }, [isVisible, modules.length, reverseSlide]);

  const shiftCards = useCallback(
    (direction: "forward" | "backward") => {
      const modulesLength = modules.length;
      const cardsPerPage = 4;

      let shiftIndex =
        direction === (reverseSlide ? "backward" : "forward")
          ? touchMove || touchStart
            ? startIndex + cardsPerPage
            : (startIndex + cardsPerPage) % modulesLength
          : startIndex - cardsPerPage;

      if (shiftIndex < 0) {
        shiftIndex = 0;
      } else if (shiftIndex > modulesLength - cardsPerPage) {
        shiftIndex = modulesLength - cardsPerPage;
      }

      const updatedVisibleCards = [];
      for (let i = 0; i < cardsPerPage; i++) {
        const index = (shiftIndex + i) % modulesLength;
        updatedVisibleCards.push(
          reverseSlide ? modulesLength - index - 1 : index
        );
      }

      setVisibleCards(updatedVisibleCards);
      setStartIndex(shiftIndex);
    },
    [modules.length, startIndex, touchStart, touchMove, reverseSlide]
  );

  useEffect(() => {
    const sliderRefCur = sliderRef.current;

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStart !== null) {
        setTouchMove(e.touches[0].clientX);
      }
    };

    const handleTouchEnd = () => {
      if (touchStart !== null && touchMove !== null && sliderRefCur) {
        const diff = touchStart - touchMove;
        if (Math.abs(diff) > 50) {
          const direction = diff > 0 ? "forward" : "backward";
          shiftCards(direction);
        }
      }
      setTouchStart(null);
      setTouchMove(null);
    };

    if (sliderRefCur) {
      sliderRefCur.addEventListener("touchstart", handleTouchStart);
      sliderRefCur.addEventListener("touchmove", handleTouchMove);
      sliderRefCur.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (sliderRefCur) {
        sliderRefCur.removeEventListener("touchstart", handleTouchStart);
        sliderRefCur.removeEventListener("touchmove", handleTouchMove);
        sliderRefCur.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [shiftCards, touchStart, touchMove]);

  const transformStyle = {
    transform: reverseSlide
      ? `translateX(-${(modules.length - 4 - startIndex) * 22}%)`
      : `translateX(-${startIndex * 22}%)`,
  };

  return (
    <div className={styles.slider} ref={sliderRef}>
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
              <Link href={""}>{module.name}</Link>
            </h3>
          </article>
        ))}
      </div>

      <button
        className={`${styles.leftArrow} ${
          reverseSlide ? "" : startIndex === 0 ? styles.hidden : ""
        }`}
        onClick={() => {
          if (reverseSlide) {
            shiftCards(
              startIndex === modules.length - 4 ? "forward" : "backward"
            );
          } else {
            shiftCards(startIndex === 0 ? "forward" : "backward");
          }
        }}
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
        className={`${styles.rightArrow} ${
          reverseSlide ? (startIndex === 0 ? styles.hidden : "") : ""
        }`}
        onClick={() => {
          if (reverseSlide) {
            shiftCards(startIndex === 0 ? "backward" : "forward");
          } else {
            shiftCards(
              startIndex === modules.length - 4 ? "backward" : "forward"
            );
          }
        }}
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
