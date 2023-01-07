import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import Loader from "react-loaders";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container portfolio-page">
        <div className="disclaimer">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
              time={3000}
              idx={15}
            />
          </h1>
        </div>
        <ul className="projects">
          <li className="project">
            <h2 className="project-name">
              To-do List
              <span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/MantasValentin/Todolist"
                >
                  <FaGithub color="#4d4d4e" />
                </a>
              </span>
            </h2>
            <p className="project-description">
              <b>Description: </b>A simple CRUD app with drag and drop
              functionality where to-dos are saved in localstorage
            </p>
            <p className="project-languages">
              <b>Languages: </b>React Typescript, SCSS, HTML
            </p>
          </li>

          <li className="project">
            <h2 className="project-name">
              Minesweeper
              <span>
                  target="_blank"
                <a
                  rel="noreferrer"
                  href="https://github.com/MantasValentin/Minesweeper"
                >
                  <FaGithub color="#4d4d4e" />
                </a>
              </span>
            </h2>
            <p className="project-description">
              <b>Description: </b>An almost complete replica of the old
              minesweeper game
            </p>
            <p className="project-languages">
              <b>Languages: </b>React Typescript, SCSS, HTML
            </p>
          </li>
        </ul>
      </div>
      <Loader type="pacman" active />
    </>
  );
};

export default Portfolio;
