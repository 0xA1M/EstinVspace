/* Components */
import NavBar from "./components/NavBar";

interface Params {
  children: React.ReactNode;
}

function PlayGroundLayout({ children }: Params) {
  return (
    <>
      <section>{children}</section>
      <NavBar />
    </>
  );
}

export default PlayGroundLayout;
