/* Dependencies */
"use client";
import { Ubuntu_Mono } from "next/font/google";
import { KeyboardEvent, useEffect, useState, useRef } from "react";
import styles from "../styles/terminal.module.css";

const ubuntuMono = Ubuntu_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

type Command = {
  command: string;
  output: string;
};

interface Params {
  output: string;
  setOutput(value: React.SetStateAction<string>): void;
  onCodeChange(data: string): void;
}

function Terminal({ output, setOutput, onCodeChange }: Params) {
  const [history, setHistory] = useState<Command[]>([]);
  const [command, setCommand] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const focusOnInput = () => {
    inputRef.current?.focus();
  };

  const handleEditorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(event.target.value);
  };

  const handleEnter = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      setIsLoading(true);

      if (command === "clear") {
        setHistory([]);
        setCommand("");
        setIsLoading(false);
        onCodeChange("");
        return;
      }

      setHistory((prevHistory) => [
        ...prevHistory,
        { command, output: "Executing..." },
      ]);
      setCommand("");

      const commands: string[] = [];
      history.map(({ command }) => commands.push(command));
      commands.push(command);

      onCodeChange(commands.join(";"));
    }
  };

  useEffect(() => {
    if (output !== "!") {
      setHistory((prevHistory) => {
        const updatedHistory = [...prevHistory];
        updatedHistory[updatedHistory.length - 1].output = output.trim();

        return updatedHistory;
      });

      setIsLoading(false);
      setOutput("!");
    }
  }, [output, setOutput]);

  return (
    <>
      <section
        id={styles.terminal}
        className={ubuntuMono.className}
        onClick={focusOnInput}
      >
        <div id={styles.terminal__body}>
          {!history.length && (
            <div id={styles.terminal__prompt}>
              <label htmlFor="terminalInput">
                <span id={styles.terminal__promptUser}>glot@vspace:</span>
                <span id={styles.terminal__promptLocation}>~</span>
                <span id={styles.terminal__promptBling}>$</span>
              </label>
              <input
                id="terminalInput"
                className={styles.terminal__input}
                type="text"
                value={command}
                onChange={handleEditorChange}
                autoFocus
                maxLength={75}
                onKeyDown={handleEnter}
                ref={inputRef}
              />
            </div>
          )}

          {history.map(({ command, output }, index) => {
            if (history.length >= 2 && index >= 1) {
              const currentCommand: string = history[index].output;
              const previousCommand: string = history[index - 1].output;

              const commonPart: string =
                currentCommand.indexOf(previousCommand) !== -1
                  ? previousCommand
                  : "";

              output = currentCommand.replace(commonPart, "").trim();
            }

            return (
              <article key={index}>
                <div id={styles.terminal__prompt}>
                  <span id={styles.terminal__promptUser}>glot@vspace:</span>
                  <span id={styles.terminal__promptLocation}>~</span>
                  <span
                    id={styles.terminal__promptBling}
                  >{`$ ${command}`}</span>
                </div>

                <div className={styles.output}>{output}</div>
              </article>
            );
          })}

          {!isLoading && history.length > 0 && (
            <div id={styles.terminal__prompt}>
              <label htmlFor="terminalInput">
                <span id={styles.terminal__promptUser}>glot@vspace:</span>
                <span id={styles.terminal__promptLocation}>~</span>
                <span id={styles.terminal__promptBling}>$</span>
              </label>
              <input
                id="terminalInput"
                className={styles.terminal__input}
                type="text"
                value={command}
                onChange={handleEditorChange}
                autoFocus
                maxLength={75}
                onKeyDown={handleEnter}
                ref={inputRef}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Terminal;
