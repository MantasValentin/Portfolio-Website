import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import "./index.scss";

const Layout = () => {
  return (
    <div className="App flex max-lg:flex-col">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
