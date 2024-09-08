import React from "react";
import Carousel from "../Components/Carousal";
import OurServices from "../Components/OurServices";
import ImageSection from "../Components/ImageSection";
import Proj from "../Components/Proj";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";
function Home() {
  return (
    <div>
      <Carousel />
      <AboutUs />
      <OurServices />
      <ImageSection />
      <Proj />
      <Footer />
    </div>
  );
}

export default Home;
