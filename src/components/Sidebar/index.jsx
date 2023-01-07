import { NavLink } from "react-router-dom";
import "./index.scss";
import {
  FaBriefcase,
  FaEnvelope,
  FaHome,
  FaGithub,
  FaUser,
} from "react-icons/fa";

const Sidebar = () => (
  <div className="flex flex-col max-lg:flex-row bg-[#181818] h-screen max-lg:h-16 w-16 max-lg:w-screen">
    <nav className="flex flex-col max-lg:flex-row flex-1 items-center justify-center">
      <NavLink className="py-4 max-lg:py-0 max-lg:px-4 w-full max-lg: max-lg:h-full flex justify-center items-center" to="/">
        <FaHome className="text-2xl" color="#4d4d4e" />
      </NavLink>
      <NavLink className="py-4 max-lg:py-0 max-lg:px-4 w-full max-lg: max-lg:h-full flex justify-center items-center" to="/about">
        <FaUser className="text-2xl" color="#4d4d4e" />
      </NavLink>
      <NavLink className="py-4 max-lg:py-0 max-lg:px-4 w-full max-lg: max-lg:h-full flex justify-center items-center" to="/portfolio">
        <FaBriefcase className="text-2xl" color="#4d4d4e" />
      </NavLink>
      <NavLink className="py-4 max-lg:py-0 max-lg:px-4 w-full max-lg: max-lg:h-full flex justify-center items-center" to="/contact">
        <FaEnvelope className="text-2xl" color="#4d4d4e" />
      </NavLink>
    </nav>
    <nav className="flex flex-none items-center justify-center"> 
      <a
        className="py-4 max-lg:py-0 max-lg:px-4 w-full max-lg:h-full flex justify-center items-center"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/MantasValentin"
      >
        <FaGithub className="text-2xl" color="#4d4d4e" />
      </a>
    </nav>
  </div>
);

export default Sidebar;
