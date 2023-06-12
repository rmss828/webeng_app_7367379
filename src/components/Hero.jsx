/*
  hero section of website
  welcomes user to website with incredibly gorgeous image of shuraig
*/

import React from "react";
import styles from "../style";
import { shuraig } from "../assets";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={shuraig}
        alt="shuraig"
        className="max-w-full h-auto relative z-[5] px-10"
      />

      <div className="absolute z-[0] w-[50%] h-[70%] left-20 bottom-20 yellow-gradient" />
    </div>

    <div className={`flex-1 ${styles.flexStart} flex-col px-0, sm:px-16, px-6`}>
      <div className={`${styles.roundBox}`}>
        <p className={`${styles.paragraph}`}>
          Image: Tri-Brigade Shuraig The Ominous Omen
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white">
          welcome <br />
          to my <br />
          <span className="project-gradient">WEB-ENG PROJECT</span>.
        </h1>
      </div>
    </div>
  </section>
);

export default Hero;
