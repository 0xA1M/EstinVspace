/* Dependencies */
"use client";
import { useState } from "react";
import { Editor } from "@monaco-editor/react";

interface Params {
  code: string;
  language: string;
  onChange(data: string): void;
}

function CodeEditor({ code, language, onChange }: Params) {
  const [value, setValue] = useState<string>(code || "");

  const handleEditorChange = (value: string | undefined) => {
    if (value) {
      setValue(value);
      onChange(value);
    }
  };
  return (
    <Editor
      height="400px"
      width="400px"
      value={value}
      language={language}
      theme="vs-dark"
      onChange={handleEditorChange}
    />
  );
}

export default CodeEditor;
