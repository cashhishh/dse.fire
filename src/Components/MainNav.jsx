import React from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

function MainNav() {
  return (
    <div>
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
}

export default MainNav;
