import "./index.scss";
import { FunctionComponent as FC, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

interface props {
  item: {
    Name: string;
    Description: string;
    Languages: string;
    Git: string;
    Link: string;
  };
  index: number;
}

const Project: FC<props> = ({ item, index }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div
      className={`project project_${index} flex-auto py-2 w-fit px-4 text-[#ff8000] hover:bg-[#ff8000] hover:text-[#531d0b] ${visible ? "basis-full" : ""}`}
    >
      <div className={`flex ${visible ? "mb-2" : ""}`}>
        <div className="hover:cursor-pointer" onClick={(e) => setVisible(!visible)}>
        {item.Name}
        </div>
        <a
          className={`flex items-center justify-center pl-2 ${visible ? "block" : "hidden"}`}
          target="_blank"
          rel="noreferrer"
          href={item.Git}
        >
          <FaGithub color="#4d4d4e" />
        </a>
        <a
          className={`flex items-center justify-center pl-2 ${visible ? "block" : "hidden"}`}
          target="_blank"
          rel="noreferrer"
          href={item.Link}
        >
          <GoLinkExternal color="#4d4d4e" />
        </a>
      </div>
      <div className={`hover:cursor-pointer ${visible ? "block" : "hidden"}`}>
        <div onClick={(e) => setVisible(!visible)} className="">
          Description: {item.Description}
        </div>
        <div onClick={(e) => setVisible(!visible)} className="">
          Languages: {item.Languages}
        </div>
      </div>
    </div>
  );
};

export default Project;
