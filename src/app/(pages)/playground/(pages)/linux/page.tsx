"use client";
import { useEffect, useState } from "react";
import Terminal from "./components/Terminal";

type Output = {
  stdout?: string;
  error?: string;
  stderr?: string;
};

function LinuxTerminal() {
  const [code, setCode] = useState<string>("");
  const [output, setOutput] = useState<string>("!");

  const handleCodeChange = (code: string): void => {
    setCode(code);
  };

  useEffect(() => {
    const runCode = async () => {
      if (code.trim() !== "") {
        try {
          const res = await fetch("/api", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ code, lang: "bash" }),
          });

          const data: Output = await res.json();

          if (data.stdout) {
            setOutput(data.stdout);
          } else {
            setOutput(
              data.stderr?.split(":").slice(2).join(":").trim() || data.stderr!
            );
          }
        } catch (error) {
          throw new Error("Error fetching data:" + error);
        }
      }
    };

    runCode();
  }, [code]);

  return (
    <>
      <h1>Linux Terminal</h1>
      <Terminal
        onCodeChange={handleCodeChange}
        output={output}
        setOutput={setOutput}
      />
    </>
  );
}

export default LinuxTerminal;
