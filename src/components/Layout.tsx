import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="relative w-full h-full">
      <Navbar styles="" />
      <Outlet />
    </div>
  );
};

export default Layout;
