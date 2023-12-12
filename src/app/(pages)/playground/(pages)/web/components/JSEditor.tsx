"use client";
/* Dependencies */
import { useState } from "react";
import { Editor } from "@monaco-editor/react";

interface Params {
  code: string;
  onChange(data: string): void;
}

function JSEditor({ code, onChange }: Params) {
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
      language="javascript"
      theme="vs-dark"
      defaultValue="// Type Here"
      onChange={handleEditorChange}
    />
  );
}

export default JSEditor;
