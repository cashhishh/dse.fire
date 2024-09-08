import React from "react";
import Navbar from "./Components/Navbar";
import MobileNavbar from "./Components/MobileNavbar";
import MainNav from "./Components/MainNav";
import Carousel from "./Components/Carousal";
import AboutUs from "./Components/AboutUs";
import OurServices from "./Components/OurServices";
import ImageSection from "./Components/ImageSection";
import Proj from "./Components/Proj";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <div>
      <MainNav />
      <div className="pt-20">
        {/* <Carousel />
        <AboutUs />
        <OurServices />
        <ImageSection />
        <Proj />
        <Footer /> */}
        {/* <About /> */}
        <Projects />
      </div>
    </div>
  );
}

export default App;
