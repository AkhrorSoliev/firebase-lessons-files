// rrd imports
import { Outlet } from "react-router";

// components
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* FOOTER */}
    </>
  );
}

export default MainLayout;
