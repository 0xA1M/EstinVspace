import Image from "next/image";

/* Components */
import Hero from "./components/Hero";
import Level from "./components/Level";

/* Assets */
import BGPic from "@/images/BGpec-01.webp";
import styles from "./academics.module.css";

function Academics() {
  return (
    <>
      <Image
        src={BGPic}
        alt=""
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />

      <Hero />
      <Level />
      <Level />
      <Level />
      <Level />
      <Level />
    </>
  );
}

export default Academics;
