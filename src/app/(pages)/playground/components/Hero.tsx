"use client";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "We produce food for Mice",
        1000,
        "We produce food for Hamsters",
        1000,
        "We produce food for Guinea Pigs",
        1000,
        "We produce food for Chinchillas",
        1000,
      ]}
      speed={50}
      style={{ fontSize: "2em" }}
      repeat={Infinity}
    />
  );
}

export default Hero;
