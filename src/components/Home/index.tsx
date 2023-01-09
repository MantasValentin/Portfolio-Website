import { Link } from "react-router-dom";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import Loader from "react-loaders";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const helloArray1 = ["H", "e", "l", "l", "o", " "];
  const helloArray2 = ["t", "h", "e", "r", "e", ","];
  const introArray = ["I", "'", "m", " "];
  const nameArray = ["M", "a", "n", "t", "a", "s", ","];
  const webArray = ["w", "e", "b", " "];
  const developerArray = ["d", "e", "v", "e", "l", "o", "p", "e", "r"];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <div className="flex-1 h-screen max-lg:h-auto max-lg:w-screen pl-16 max-lg:pl-0 max-lg:pt-40 max-sm:pt-16">
        <div className="flex flex-col w-full h-full justify-center max-lg:items-center">
          <h1 className="introduction text-white text-[8rem] max-lg:text-[6rem] leading-[6rem] max-lg:leading-[5rem] max-sm:text-[3rem] max-sm:leading-[2.5rem] max-lg:text-center">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={helloArray1}
              time={3000}
              idx={10}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={helloArray2}
              time={3000}
              idx={16}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={introArray}
              time={3000}
              idx={22}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              time={3000}
              idx={26}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={webArray}
              time={3000}
              idx={33}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={developerArray}
              time={3000}
              idx={37}
            />
          </h1>
          <h2 className="experience text-[#8d8d8d] my-6 text-xl max-sm:text-sm">
            Beginner Frontend Developer
          </h2>
          <Link
            to="/contact"
            className="contact w-fit px-4 py-2 text-[#ff8000] text-lg max-sm:text-sm hover:bg-[#ff8000] hover:text-[#531d0b]"
          >
            CONTACT ME
          </Link>
        </div>
      <Loader type="pacman" active />
    </div>
  );
};

export default Home;
