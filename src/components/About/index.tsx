import "./index.scss";
import AnimatedLetter from "../AnimatedLetters";
import { useEffect, useState } from "react";
import { SiTypescript } from "react-icons/si";
import { FaCss3, FaGitAlt, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";
import Loader from "react-loaders";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const aboutMeArray = ["A", "b", "o", "u", "t", " "];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 1800);
  }, []);

  return (
    <div className="flex-1 h-screen max-lg:h-auto max-lg:w-screen pl-16 max-lg:pl-0 max-lg:pt-40 max-sm:pt-16">
      <div className="flex max-lg:flex-col w-full h-full">
        <div className="flex flex-1 flex-col w-full max-w-[80rem] h-full max-lg:px-12 justify-center max-lg:items-center">
          <h1 className="introduction text-white pb-4 text-[8rem] max-lg:text-[6rem] leading-[6rem] max-lg:leading-[5rem] max-sm:text-[3rem] max-sm:leading-[2.5rem] max-lg:text-center">
            <AnimatedLetter
              letterClass={letterClass}
              strArray={aboutMeArray}
              time={1800}
              idx={15}
            />
            <AnimatedLetter
              letterClass={letterClass}
              strArray={["m", "e"]}
              time={1800}
              idx={21}
            />
          </h1>
          <p className="info_1 text-white text-xl max-lg:text-lg max-sm:text-sm font-[sans-serif] py-2 max-lg:text-center">
            I'm an ambitious front-end developer located in Lithuania
            looking for a role in an established IT company with the opportunity
            to work with the latest technologies on challenging and diverse
            projects.
          </p>
          <p className="info_2 text-white text-xl max-lg:text-lg max-sm:text-sm font-[sans-serif] py-2 max-lg:text-center">
            I enjoy working in a team as it allows me to learn from others and
            get valuable feedback on my work. I don't fear making mistakes or
            taking up leadership positions as I can easily play to everyone's
            skills and weak points.
          </p>
          <p className="info_3 text-white text-xl max-lg:text-lg max-sm:text-sm font-[sans-serif] py-2 max-lg:text-center">
            I know how to work with HTML, CSS, SASS, TailwindCSS, Git, JS, Typescript, ReactJS, VueJS.
          </p>
        </div>

        <div className="cube flex flex-none w-80 max-lg:w-full pb-28 max-lg:pb-0 max-lg:pt-14 justify-start items-center">
          <div className="cubespinner">
            <div className="face1">
              <SiTypescript />
            </div>
            <div className="face2">
              <FaHtml5 color="#F06529" />
            </div>
            <div className="face3">
              <FaCss3 color="#28A4D9" />
            </div>
            <div className="face4">
              <FaReact color="#5ED4F4" />
            </div>
            <div className="face5">
              <FaJsSquare color="#EFD81D" />
            </div>
            <div className="face6">
              <FaGitAlt color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" active />
    </div>
  );
};

export default About;
