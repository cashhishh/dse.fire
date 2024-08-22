import React, { useState } from "react";

const MobileNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="p-4 fixed top-0 left-0 w-full flex justify-between items-center shadow-lg md:hidden z-50 bg-white">
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

      {isSidebarOpen && (
        <div
          className="fixed top-0 right-0 h-full bg-red-500 text-white z-50 transition-transform transform"
          style={{ width: "45%" }}
          aria-labelledby="sidebar"
        >
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
          <div className="flex flex-col items-center mt-10 space-y-4">
            <a
              href="#home"
              className="text-white hover:bg-red-700 p-3 rounded-lg transition-colors duration-150"
              onClick={toggleSidebar}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:bg-red-700 p-3 rounded-lg transition-colors duration-150"
              onClick={toggleSidebar}
            >
              About Us
            </a>
            <a
              href="#projects"
              className="text-white hover:bg-red-700 p-3 rounded-lg transition-colors duration-150"
              onClick={toggleSidebar}
            >
              Projects
            </a>
            <a
              href="#services"
              className="text-white hover:bg-red-700 p-3 rounded-lg transition-colors duration-150"
              onClick={toggleSidebar}
            >
              Services
            </a>
            <a
              href="#industry"
              className="text-white hover:bg-red-700 p-3 rounded-lg transition-colors duration-150"
              onClick={toggleSidebar}
            >
              Industry We Serve
            </a>
            <a
              href="#contact"
              className="text-white hover:bg-red-700 p-3 rounded-lg transition-colors duration-150"
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
