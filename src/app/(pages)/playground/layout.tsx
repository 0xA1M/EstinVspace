/* Components */
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

interface Params {
  children: React.ReactNode;
}

function PlayGroundLayout({ children }: Params) {
  return (
    <>
      <section>
        <h1>Unleash Your Creativity in the Digital Realm</h1>
        <Hero />
      </section>

      <NavBar />
      {children}
    </>
  );
}

export default PlayGroundLayout;
