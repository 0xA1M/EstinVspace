"use client";
/* Dependencies */
import { useState } from "react";

/* Components */
import Slider from "./Slider";

/* Assets */
import styles from "./styles/level.module.css";
import { Levels, Modules } from "@/lib/module";

/* Main Component Params */
interface Params {
  levelName: string;
}

/* Main Component */
function Level({ levelName }: Params) {
  const [semester, setSemester] = useState<string>("S1");
  const [specialty, setSpecialty] = useState<string>("AI");
  const [fade, setFade] = useState<boolean>(false);
  const levelIndex: number =
    {
      "1CP": 0,
      "2CP": 1,
      "1CS": 2,
      "2CS": 3,
      "3CS": 4,
    }[levelName] || 0;

  const handleSemesterChange = (newSemester: string) => {
    setSemester(newSemester);
  };

  const handleFade = () => {
    setFade((prev) => !prev);

    setTimeout(() => {
      setFade((prev) => !prev);
    }, 400);
  };

  const changeSpecialty = (newSpecialty: string) => {
    handleFade();

    setTimeout(() => {
      setSpecialty(newSpecialty);
    }, 300);
  };

  const getModules = (level: string, semesterIndex: number): Modules => {
    const selectedLevel = Levels.find((lvl) => lvl.level === level);

    if (selectedLevel) {
      const selectedSemester = selectedLevel.semesters[semesterIndex];

      if (!selectedLevel.specialty) {
        return selectedSemester as Modules;
      } else {
        if (level === "2CS" && semesterIndex === 0) {
          return selectedSemester as Modules;
        } else if (
          level === "3CS" ||
          (level === "2CS" && semesterIndex === 1)
        ) {
          if (Array.isArray(selectedSemester)) {
            const specialtyModules = selectedSemester.find((obj) => {
              return "specialtyName" in obj && obj.specialtyName === specialty;
            });

            if (specialtyModules && "modules" in specialtyModules) {
              return specialtyModules.modules;
            }
          }
        }
      }
    }

    return [];
  };

  return (
    <section
      className={styles.level}
      onKeyDown={(e) => {
        if (e.key === "Tab") e.preventDefault();
      }}
    >
      <div className={styles.levelHeader}>
        <h2>{Levels[levelIndex].level}</h2>

        <div className={styles.togglersWrapper}>
          <div
            className={`${styles.specialtyWrapper} ${
              levelName === "3CS" || (levelName === "2CS" && semester === "S2")
                ? ""
                : styles.hidden
            }`}
          >
            <button
              onClick={() => changeSpecialty("AI")}
              className={specialty === "AI" ? styles.active : ""}
            >
              AI
            </button>
            <button
              onClick={() => changeSpecialty("CyberSec")}
              className={specialty === "CyberSec" ? styles.active : ""}
            >
              CyberSec
            </button>
          </div>

          <div className={styles.semesterToggler}>
            <button
              onClick={() => handleSemesterChange("S1")}
              className={semester === "S1" ? styles.active : ""}
            >
              S1
            </button>
            <button
              onClick={() => handleSemesterChange("S2")}
              className={semester === "S2" ? styles.active : ""}
            >
              S2
            </button>
          </div>
        </div>
      </div>

      <div className={`${styles.levelBody} ${fade && styles.fade}`}>
        <div
          className={`${styles.leftSide} ${
            semester === "S1" ? styles.active : ""
          }`}
        >
          <Slider
            modules={getModules(levelName, semester === "S1" ? 0 : 1)}
            isVisible={semester === "S1"}
            reverseSlide={levelIndex % 2 === 1}
          />
        </div>

        <div
          className={`${styles.rightSide} ${
            semester === "S2" ? styles.active : ""
          }`}
        >
          <Slider
            modules={getModules(levelName, semester === "S1" ? 0 : 1)}
            isVisible={semester === "S2"}
            reverseSlide={levelIndex % 2 === 1}
          />
        </div>
      </div>
    </section>
  );
}

export default Level;
