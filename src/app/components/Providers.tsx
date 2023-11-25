"use client";
/* Dependencies */
import { ThemeProvider } from "next-themes";

/* Component Params */
interface Params {
  children: React.ReactNode;
}

/* Provide's theme toggling capabilities */
function Providers({ children }: Params) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Providers;
