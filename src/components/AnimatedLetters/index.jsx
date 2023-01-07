import { useEffect, useState } from "react";
import "./index.scss";

const AnimatedLetters = ({ letterClass, strArray, time,idx }) => {
  const [animated, setAnimated] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHover(true);
    }, time);
  }, [])
  

  return (
    <span>
      {strArray.map((char, i) => (
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
