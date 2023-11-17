/* Dependencies Imports */
import { Link, useOutletContext } from "react-router-dom";

/* Assets Imports */
import "../assets/styles/pages/home.css";
import PinkWave from "../assets/images/pink.svg";
import Rocket from "../assets/images/Rocket.svg";
import RocketFire from "../assets/images/Rocket-fire.svg";
import BlueWave from "../assets/images/blue.svg";

function Home() {
  const isDark: boolean = useOutletContext<boolean>();

  return (
    <>
      <section className={`hero ${isDark ? "dark" : ""}`}>
        <img src={PinkWave} loading="lazy" />
        <div className="rocket-container">
          <img src={Rocket} loading="lazy" className="rocket" />
          <img src={RocketFire} loading="lazy" className="rocket-fire" />
        </div>
        <img src={BlueWave} loading="lazy" className="blue-wave" />

        <h1 className="title">
          <span className="title-logo">
            <span>ESTIN</span>
            <span className="blue-text">V-Space</span>
          </span>
          <span className="title-quote">
            Ignite Your Learning Odyssey To The Stars
          </span>
        </h1>

        <h2 className="sub-title">
          V-Space is your gateway to a vast world of knowledge, where you can
          explore self-development and refine your skills. Our extensive content
          empowers you to apply what you learn, fostering personal and
          professional growth.
        </h2>
      </section>

      <section className={`academics ${isDark ? "dark" : ""}`}>
        <div className="content">
          <h2 className="section-title">Academics</h2>

          <p className="section-description">
            Discover a Diverse Array of Scholarly Resources, including Courses,
            TDs, and EMD from Various Sources to Elevate Your Academic Journey!
          </p>

          <Link to="academics">
            Study
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="link-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </section>

      <section className={`selfdev ${isDark ? "dark" : ""}`}>
        <div className="content">
          <h2 className="section-title">Self Development</h2>

          <p className="section-description">
            Unleash your programming potential at the playground. Test your code
            with the built-in compiler, dive in, and embark on your coding
            journey today!
          </p>

          <Link to="selfdev">
            Improve
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="link-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </section>

      <section className={`playground ${isDark ? "dark" : ""}`}>
        <div className="content">
          <h2 className="section-title">Playground</h2>

          <p className="section-description">
            Unleash your programming potential at the playground. Test your code
            with the built-in compiler, dive in, and embark on your coding
            journey today!
          </p>

          <Link to="selfdev">
            Play
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="link-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
