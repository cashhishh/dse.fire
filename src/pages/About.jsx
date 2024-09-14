import React from "react";
import { NavLink } from "react-router-dom";
import MainNav from "../Components/MainNav";
import AnimatedTextDiv from "../Components/AnimatedTextDiv";
import AboutBand from "../Components/AboutBand";
import Footer from "../Components/Footer";
import CompanyProfile from "../Components/CompanyProfile";
import Mission from "../Components/Mission";

function About() {
  return (
    <div className="bg-red-200">
      <MainNav />
      <AnimatedTextDiv />
      <AboutBand />

      {/* Navigation Links */}

      <CompanyProfile />
      {/* <Mission /> */}

      <Footer />
    </div>
  );
}

export default About;
