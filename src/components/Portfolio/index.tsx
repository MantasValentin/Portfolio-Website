import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import Project from "./Project";

var Data = [
  {
    Name: "Password Generator",
    Description:
      "Calculates the password's entropy, cheks for if the password has been compromised and gives multiple options for generating a new password",
    Languages: "HTML, CSS, TailwindCSS, React Typescript",
    Git: "https://github.com/MantasValentin/Password-Generator/",
    Link: "https://passwordgenerator.mantasval.com/",
  },
  {
    Name: "Minesweeper",
    Description: "An almost complete replica of the old minesweeper game",
    Languages: "HTML, SCSS, React Typescript",
    Git: "https://github.com/MantasValentin/Minesweeper/",
    Link: "https://minesweeper.mantasval.com/",
  },
  {
    Name: "Todo List",
    Description:
      "A simple CRUD app with drag and drop functionality where to-dos are saved in localstorage.",
    Languages: "HTML, TailwindCSS, React Typescript",
    Git: "https://github.com/MantasValentin/Todo-List/",
    Link: "https://todolist.mantasval.com/",
  },
  {
    Name: "Portfolio Website",
    Description: "My personal portfolio website",
    Languages: "HTML, SCSS, TailwindCSS, JS, React Typescript",
    Git: "https://github.com/MantasValentin/Portfolio-Website/",
    Link: "https://mantasval.com/",
  },
  {
    Name: "Code Editor",
    Description: "Live HTML, CSS, JS code editor",
    Languages: "HTML, TailwindCSS, JS, React Typescript",
    Git: "https://github.com/MantasValentin/Code-Editor/",
    Link: "http://codeeditor.mantasval.com/",
  },
];

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 1800);
  }, []);

  return (
    <div className="flex-1 h-screen max-lg:h-auto max-lg:w-screen px-16 max-lg:px-8 pt-40 max-sm:pt-16">
      <div className="flex flex-col w-full h-full items-center">
        <h1 className="introduction pb-16 max-sm:pb-6 text-white text-[8rem] max-lg:text-[6rem] leading-[6rem] max-lg:leading-[5rem] max-sm:text-[3rem] max-sm:leading-[2.5rem] max-lg:text-center">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
            time={1800}
            idx={15}
          />
        </h1>
        <ul className="flex justify-between flex-wrap text-xl max-lg:text-lg max-sm:text-sm font-[sans-serif]">
        {Data.map((item, index) => (
          <Project item={item} index={index + 1} />
        ))}
        </ul>
      </div>
      <Loader type="pacman" active />
    </div>
  );
};

export default Portfolio;
