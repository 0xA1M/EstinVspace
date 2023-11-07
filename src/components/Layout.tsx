import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <main className={isDark ? "dark" : ""}>
        <Outlet />
      </main>
      <Footer isDark={isDark} />
    </>
  );
}

export default Layout;
