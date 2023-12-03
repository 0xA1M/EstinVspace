"use client";
import { useState } from "react";

import CodeEditor from "./components/CodeEditor";

function Playground() {
  const [code, setCode] = useState<string>("");
  const [lang, setLang] = useState<string>("javascript");
  const [res, setRes] = useState<string>("");

  const handleCodeChange = (code: string): void => {
    setCode(code);
  };

  const handleSelectLang = (event: any) => {
    setLang(event.target.value);
  };

  const runCode = async () => {
    const res = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code, lang }),
    });
    const data = await res.json();

    console.log(data);
    setRes(data.stdout);
  };

  return (
    <>
      <select value={lang} onChange={handleSelectLang}>
        <option value="javascript">JavaScript</option>
        <option value="c">C</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
      </select>
      <CodeEditor code={code} language={lang} onChange={handleCodeChange} />
      <button onClick={runCode}>Run</button>
      {res && <div className="output">{res}</div>}
    </>
  );
}

export default Playground;
