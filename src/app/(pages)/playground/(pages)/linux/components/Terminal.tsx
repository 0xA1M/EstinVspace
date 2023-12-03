/* Dependencies */
"use client";
import { useState } from "react";
import styles from "../styles/terminal.module.css";

interface Params {
  code: string;
  onChange(data: string): void;
}

function Terminal({ code, onChange }: Params) {
  const [value, setValue] = useState<string>(code || "");

  const handleEditorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <>
      <div id={styles.terminal}>
        <section id={styles.terminal__body}>
          <div id={styles.terminal__prompt}>
            <label htmlFor="terminalInput">
              <span id={styles.terminal__promptUser}>user@ubuntu:</span>
              <span id={styles.terminal__promptLocation}>~</span>
              <span id={styles.terminal__promptBling}>$</span>
            </label>
            <input
              id="terminalInput"
              className={styles.terminal__input}
              type="text"
              value={value}
              onChange={handleEditorChange}
              autoFocus
              maxLength={75}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Terminal;
