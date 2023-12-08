/* Components */
import Hero from "./components/Hero";
import Level from "./components/Level";

/* Assets */

function Academics() {
  return (
    <>
      <Hero />

      <Level levelName="1CP" />
      <Level levelName="2CP" />
      <Level levelName="1CS" />
      <Level levelName="2CS" />
      <Level levelName="3CS" />
    </>
  );
}

export default Academics;
