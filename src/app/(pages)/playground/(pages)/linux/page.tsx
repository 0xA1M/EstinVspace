"use client";
import { useState } from "react";
import Terminal from "./components/Terminal";

function LinuxTerminal() {
  const [code, setCode] = useState<string>("");
  const [res, setRes] = useState<string>("");

  const handleCodeChange = (code: string): void => {
    setCode(code);
  };

  const runCode = async () => {
    const res = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code, lang: "bash" }),
    });
    const data = await res.json();

    console.log(data);
    setRes(data.stdout);
  };

  return (
    <>
      <h1>Linux Terminal</h1>
      <Terminal code={code} onChange={handleCodeChange} />
      <button onClick={runCode}>Run</button>
      {res && <div className="output">{res}</div>}
    </>
  );
}

export default LinuxTerminal;
