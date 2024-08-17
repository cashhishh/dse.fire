import React, { useState } from "react";

const MobileNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="p-4  fixed top-0 left-0 w-full flex  justify-between items-center shadow-lg md:hidden">
      {/* Logo Section */}
      <div className="text-BLACK text-lg font-bold flex flex-row items-center gap-2 mr-5">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKfwYgZ_vQ7uPHCjSZWTSHdM0UIMDPJDgZ6BiVjj3Tf2KQuBNGrCTFX2XhXegm8GWEYUo&usqp=CAU"
          className="h-14 p-2 ml-2"
        />
        <span className="text-black text-lg lg:text-xl font-sans">
          DS Engineers
        </span>
      </div>

      {/* Hamburger Icon */}
      <button
        onClick={toggleSidebar}
        className="text-black focus:outline-none mr-4"
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 right-0 h-full bg-red-100-600 text-white bg-red-500 z-50  transform"
          style={{ width: "45%" }} // Set the width to 30% of the screen width
          aria-labelledby="sidebar"
        >
          <div className="p-4 flex justify-between items-center border-b border-900">
            <span className="text-xl text-center">Menu</span>
            <button
              onClick={toggleSidebar}
              className="text-white  p-2 rounded-lg transition-colors duration-100"
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
          <div className="flex flex-col items-center mt-10 space-y-4">
            <a
              href="#home"
              className="text-white  hover:bg-red-100 hover:text-red-900 p-1 rounded-lg transition-colors duration-100 text-xl"
              onClick={toggleSidebar}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:bg-red-100 hover:text-red-900 p-1 rounded-lg transition-colors duration-100 text-xl"
              onClick={toggleSidebar}
            >
              About Us
            </a>
            <a
              href="#Projects"
              className="text-white hover:bg-red-100 hover:text-red-900 p-1 rounded-lg transition-colors duration-100 text-xl"
              onClick={toggleSidebar}
            >
              Projects
            </a>
            <a
              href="#services"
              className="text-white hover:bg-red-100 hover:text-red-900 p-1 rounded-lg transition-colors duration-100 text-xl"
              onClick={toggleSidebar}
            >
              Services
            </a>
            <a
              href="#Industry"
              className="text-white hover:bg-red-100 hover:text-red-900 p-1 rounded-lg transition-colors duration-100 text-xl"
              onClick={toggleSidebar}
            >
              Industry we serve
            </a>
            <a
              href="#contact"
              className="text-white hover:bg-red-100 hover:text-red-900 p-1 rounded-lg transition-colors duration-100 text-xl"
              onClick={toggleSidebar}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
