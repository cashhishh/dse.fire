import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for navigation

const MobileNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="p-4 fixed top-0 left-0 w-full flex justify-between items-center shadow-lg md:hidden z-50 bg-white">
      {/* Logo Section */}
      <div className="text-black text-lg font-bold flex items-center gap-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKfwYgZ_vQ7uPHCjSZWTSHdM0UIMDPJDgZ6BiVjj3Tf2KQuBNGrCTFX2XhXegm8GWEYUo&usqp=CAU"
          className="h-14 p-2"
          alt="Company Logo"
        />
        <span className="text-black text-lg lg:text-xl font-sans">
          DS Engineers
        </span>
      </div>

      {/* Menu Toggle Button */}
      <button onClick={toggleSidebar} className="text-black focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-red-500 text-white z-50 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "45%" }}
        aria-labelledby="sidebar"
      >
        {/* Close Button */}
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <span className="text-xl">Menu</span>
          <button
            onClick={toggleSidebar}
            className="text-white p-2 rounded-lg transition-colors duration-150"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {/* Links */}
        <div className="flex flex-col items-center mt-10 space-y-4 px-8">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-red-700 p-3 rounded-lg transition-colors duration-150"
                : "text-white hover:bg-red-700 p-3 rounded-lg transition-colors duration-150"
            }
            onClick={toggleSidebar}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-red-700 p-3 rounded-lg transition-colors duration-150"
                : "text-white hover:bg-red-700 p-3 rounded-lg transition-colors duration-150"
            }
            onClick={toggleSidebar}
          >
            About Us
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-red-700 p-3 rounded-lg transition-colors duration-150"
                : "text-white hover:bg-red-700 p-3 rounded-lg transition-colors duration-150"
            }
            onClick={toggleSidebar}
          >
            Projects
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-red-700 p-3 rounded-lg transition-colors duration-150"
                : "text-white hover:bg-red-700 p-3 rounded-lg transition-colors duration-150"
            }
            onClick={toggleSidebar}
          >
            Services
          </NavLink>
          <NavLink
            to="/industry"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-red-700 p-3 rounded-lg transition-colors duration-150"
                : "text-white hover:bg-red-700 p-3 rounded-lg transition-colors duration-150"
            }
            onClick={toggleSidebar}
          >
            Industry We Serve
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-red-700 p-3 rounded-lg transition-colors duration-150"
                : "text-white hover:bg-red-700 p-3 rounded-lg transition-colors duration-150"
            }
            onClick={toggleSidebar}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
