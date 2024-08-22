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

function App() {
  return (
    <div>
      <MainNav />
      <div className="pt-20">
        <Carousel />
        <AboutUs />
        <OurServices />
        <ImageSection />
        <Proj />
        <Footer />
      </div>
    </div>
  );
}

export default App;
