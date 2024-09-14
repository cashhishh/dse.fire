import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink

function Navbar() {
  return (
    <div>
      <nav className="p-4 fixed top-0 left-0 w-full flex bg-white justify-between items-center shadow-lg z-50">
        <div className="text-black text-lg font-bold flex flex-row items-center gap-2 mr-5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKfwYgZ_vQ7uPHCjSZWTSHdM0UIMDPJDgZ6BiVjj3Tf2KQuBNGrCTFX2XhXegm8GWEYUo&usqp=CAU"
            className="h-14 p-2 ml-2"
            alt="Logo"
          />
          <span className="text-black text-lg lg:text-xl font-sans">
            DS Engineers
          </span>
        </div>

        <div className="space-x-2 lg:space-x-5 max-x-50 mr-4 font-sans text-md flex flex-row text-sm md:text-md">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold bg-gray-100 rounded-lg p-2"
                : "text-black font-semibold hover:text-red-700 hover:bg-gray-100 rounded-lg p-2"
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold bg-gray-100 rounded-lg p-2"
                : "text-black font-semibold hover:text-red-700 hover:bg-gray-100 rounded-lg p-2"
            }
          >
            ABOUT US
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold bg-gray-100 rounded-lg p-2"
                : "text-black font-semibold hover:text-red-700 hover:bg-gray-100 rounded-lg p-2"
            }
          >
            PROJECTS
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold bg-gray-100 rounded-lg p-2"
                : "text-black font-semibold hover:text-red-700 hover:bg-gray-100 rounded-lg p-2"
            }
          >
            SERVICES
          </NavLink>
          <NavLink
            to="/industry"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold bg-gray-100 rounded-lg p-2"
                : "text-black font-semibold hover:text-red-700 hover:bg-gray-100 rounded-lg p-2"
            }
          >
            INDUSTRY WE SERVE
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold bg-gray-100 rounded-lg p-2"
                : "text-black font-semibold hover:text-red-700 hover:bg-gray-100 rounded-lg p-2"
            }
          >
            CONTACT US
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
