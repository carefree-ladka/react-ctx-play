import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import LeftSidebar from "./leftSidebar";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main className="split">
        <LeftSidebar />
        <Outlet />
      </main>
    </div>
  );
}
