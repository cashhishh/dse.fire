import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="w-full mb-6 md:w-1/3 md:mb-0">
            <h2 className="text-xl font-bold mb-4">DS Engineers</h2>
            <p className="mb-2">D-455,Indra Park</p>
            <p className="mb-2">Najafgarh</p>
            <p className="mb-2">Phone: 9310382206</p>
            <p className="mb-2">Email: dse.fire.2015@gmail.com</p>
          </div>

          <div className="w-full mb-6 md:w-1/3 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Our Services</h2>
            <ul className="list-disc pl-5">
              <li className="mb-2">
                <a href="#fire-fighting" className="hover:text-gray-400">
                  Fire Fighting
                </a>
              </li>
              <li className="mb-2">
                <a href="#water-management" className="hover:text-gray-400">
                  Water Management
                </a>
              </li>
              <li className="mb-2">
                <a href="#water-disposal" className="hover:text-gray-400">
                  Water Disposal
                </a>
              </li>
              <li className="mb-2">
                <a href="#amc" className="hover:text-gray-400">
                  AMC Work
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="list-disc pl-5">
              <li className="mb-2">
                <a href="#about-us" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact-us" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#careers" className="hover:text-gray-400">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#faq" className="hover:text-gray-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-black mt-8">
          <p>
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
