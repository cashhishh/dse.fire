import React from "react";
import MainNav from "../Components/MainNav";
import AnimatedTextDiv from "../Components/AnimatedTextDiv";
import AboutBand from "../Components/AboutBand";
import CompanyProfile from "../Components/CompanyProfile";
import Footer from "../Components/Footer";
import Mission from "../Components/Mission";

function About() {
  return (
    <div className="bg-red-200">
      <AnimatedTextDiv />
      <AboutBand />
      {/* <CompanyProfile /> */}
      <Mission />
      <Footer />
    </div>
  );
}

export default About;
