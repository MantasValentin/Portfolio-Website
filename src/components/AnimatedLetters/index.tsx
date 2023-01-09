import { useEffect, useState, FunctionComponent as FC } from "react";
import "./index.scss";

interface props {
  letterClass: string;
  strArray: string[];
  time: number;
  idx: number;
}

const AnimatedLetters: FC<props> = ({ letterClass, strArray, time, idx }) => {
  const [animated, setAnimated] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHover(true);
    }, time);
  }, [])
  

  return (
    <span>
      {strArray.map((char: any, i: number) => (
        <span
          onMouseEnter={() => setAnimated(() => true)}
          onAnimationEnd={() => setAnimated(() => false)}
          key={char + i}
          className={
            animated && hover
              ? `${letterClass} _${i + idx} animated`
              : `${letterClass} _${i + idx}`
          }
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
