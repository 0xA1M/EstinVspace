"use client";
/* Dependencies */
import { useState } from "react";

/* Components */
import Slider from "./Slider";

/* Assets */
import styles from "./styles/level.module.css";
import { Levels } from "@/lib/module";

/* Main Component */
function Level() {
  const [semester, setSemester] = useState<string>("S1");

  const handleSemesterChange = (newSemester: string) => {
    setSemester(newSemester);
  };

  return (
    <section className={styles.level}>
      <div className={styles.levelHeader}>
        <h2>{"1CP"}</h2>
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

      <div className={styles.levelBody}>
        <div
          className={`${styles.leftSide} ${
            semester === "S1" ? styles.active : ""
          }`}
        >
          <Slider
            modules={Levels[0].semesters[0]}
            isVisible={semester === "S1"}
          />
        </div>

        <div
          className={`${styles.rightSide} ${
            semester === "S2" ? styles.active : ""
          }`}
        >
          <Slider
            modules={Levels[0].semesters[1]}
            isVisible={semester === "S2"}
          />
        </div>
      </div>
    </section>
  );
}

export default Level;
