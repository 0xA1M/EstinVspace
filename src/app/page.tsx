/* Components */
import Hero from "./components/Home/Hero";
import Section from "./components/Home/Section";

/* Home Page */
function Home() {
  return (
    <>
      <Hero />
      <Section
        title="Academics"
        description="Discover a Diverse Array of Scholarly Resources, including Courses,
          TDs, and EMD from Various Sources to Elevate Your Academic Journey!"
        link="/academics"
        linkQuote="Study"
      />
      <Section
        title="Self Development"
        description="Elevate your IT skills. Navigate a tailored collection of resources to advance in various IT fields, boosting your career journey."
        link="/selfdev"
        linkQuote="Improve"
        isSelfDev={true}
      />
      <Section
        title="Playground"
        description="Unleash your programming potential at the playground. Test your code with the built-in compiler, dive in, and embark on your coding journey today!"
        link="/playground"
        linkQuote="Play"
      />
    </>
  );
}

export default Home;
