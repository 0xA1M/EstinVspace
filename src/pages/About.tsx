import Vid from "../assets/Render.mp4";

function About() {
  return <video autoPlay loop>
		<source src={Vid} type="video/mp4"></source>
  	</video>;
}

export default About;
