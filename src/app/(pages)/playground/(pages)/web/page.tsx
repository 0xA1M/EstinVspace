"use client";
import { useEffect, useState } from "react";
import HTMLEditor from "./components/HTMLEditor";
import CSSEditor from "./components/CSSEditor";
import JSEditor from "./components/JSEditor";
import "./page.css";

function Web() {
  const [html, setHTML] = useState<string>("");
  const [css, setCSS] = useState<string>("");
  const [js, setJS] = useState<string>("");

  const onHTMLChange = (html: string) => {
    setHTML(html);
  };

  const onCSSChange = (css: string) => {
    setCSS(css);
  };

  const onJSChange = (js: string) => {
    setJS(js);
  };

  useEffect(() => {
    const outputFrame: HTMLIFrameElement = document.querySelector("#output")!;
    const fullHTML = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
          <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
    `;

    outputFrame.setAttribute("srcdoc", fullHTML);
    outputFrame.setAttribute("sandbox", "allow-scripts allow-modals allow-same-origin");
  }, [html, css, js]);

  return (
    <>
      <section>
        <article>
          <label htmlFor="html">HTML:</label>
          <HTMLEditor code={html} onChange={onHTMLChange} />
        </article>

        <article>
          <label htmlFor="css">CSS:</label>
          <CSSEditor code={css} onChange={onCSSChange} />
        </article>

        <article>
          <label htmlFor="js">JS:</label>
          <JSEditor code={js} onChange={onJSChange} />
        </article>
      </section>

      <iframe id="output" title="output"></iframe>
    </>
  );
}

export default Web;
