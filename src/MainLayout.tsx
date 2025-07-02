import { Outlet, useLocation } from "react-router";
import Navbar from "./components/layout/Navbar";
import Banner from "./components/layout/Banner";
import Footer from "./components/layout/Footer";

function MainLayout() {
  const location = useLocation();
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        {location.pathname === "/" && <Banner />}
        <div className=" flex-1 mx-auto max-w-screen px-4">
          <Outlet />
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default MainLayout;
