/* Dependencies */
import { Roboto } from "next/font/google";

/* Components */
import Providers from "./components/Providers";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

/* Assets */
import "./global.css";
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

/* Component Params */
interface Params {
  children: React.ReactNode;
}

/* Root Layout */
function RootLayout({ children }: Params) {
  return (
    <html lang="en" className={roboto.className} suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
