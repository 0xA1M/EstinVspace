import { NextRequest, NextResponse } from "next/server";

type RequestType = {
  code: string;
  lang: string;
};

const API_KEY = process.env.API_KEY;

export async function POST(req: NextRequest) {
  const { code, lang }: RequestType = await req.json();
  if (!code || !lang) {
    return new Response("Code and Language are required", {
      status: 400,
    });
  }

  const headers = {
    Authorization: `${API_KEY}`,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  /* Fix Languages that need the public class / namespace to be the same as the name of the file, (Java, C#, Kotlin) */
  const data = {
    files: [
      {
        name:
          lang === "java"
            ? "Main.java"
            : lang === "csharp"
            ? "Main.cs"
            : lang === "bash"
            ? "main.sh"
            : `main.${lang}`,
        content: code,
      },
    ],
  };

  let apiUrl: string;
  switch (lang) {
    case "javascript":
      apiUrl = "https://glot.io/api/run/javascript/latest";
      break;
    case "python":
      apiUrl = "https://glot.io/api/run/python/latest";
      break;
    case "java":
      apiUrl = "https://glot.io/api/run/java/latest";
      break;
    case "cpp":
      apiUrl = "https://glot.io/api/run/cpp/latest";
      break;
    case "c":
      apiUrl = "https://glot.io/api/run/c/latest";
      break;
    case "assembly":
      apiUrl = "https://glot.io/api/run/assembly/latest";
      break;
    case "go":
      apiUrl = "https://glot.io/api/run/go/latest";
      break;
    case "rust":
      apiUrl = "https://glot.io/api/run/rust/latest";
      break;
    case "swift":
      apiUrl = "https://glot.io/api/run/swift/latest";
      break;
    case "dart":
      apiUrl = "https://glot.io/api/run/dart/latest";
      break;
    case "csharp":
      apiUrl = "https://glot.io/api/run/csharp/latest";
      break;
    case "bash":
      apiUrl = "https://glot.io/api/run/bash/latest";
      break;
    default:
      return new Response("Unsupported Language", {
        status: 400,
      });
  }

  const runCode = await fetch(apiUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });
  const runCodeRes = await runCode.json();

  return NextResponse.json(runCodeRes);
}
