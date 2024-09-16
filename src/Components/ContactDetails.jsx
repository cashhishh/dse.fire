// src/ContactDetails.jsx

import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const ContactDetails = () => {
  return (
    <div className="py-12 px-4 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
          Contact Us
        </h1>

        {/* Contact Information */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4 transition-transform transform hover:scale-105">
              <FaPhone className="text-3xl text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                <a
                  href="tel:+919310382206"
                  className="text-gray-600 hover:underline"
                >
                  +91 9310382206
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4 transition-transform transform hover:scale-105">
              <FaEnvelope className="text-3xl text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <a
                  href="mailto:dse.fire.2015@gmail.com?subject=Contact%20Inquiry"
                  className="text-gray-600 hover:underline"
                >
                  dse.fire.2015@gmail.com
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4 transition-transform transform hover:scale-105">
              <FaMapMarkerAlt className="text-3xl text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">
                  D-455 Indra Park, Najafgarh, New Delhi, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
            Follow Us
          </h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              className="text-blue-600 hover:text-blue-700 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-3xl" />
            </a>
            <a
              href="https://twitter.com"
              className="text-blue-400 hover:text-blue-500 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="text-3xl" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-blue-800 hover:text-blue-900 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
