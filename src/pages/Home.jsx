import React from "react";
import MainNav from "../Components/MainNav";
import Carousel from "../Components/Carousal";
import AboutUs from "../Components/AboutUs";
import OurServices from "../Components/OurServices";
import ImageSection from "../Components/ImageSection";
import Proj from "../Components/Proj";

function Home() {
  return (
    <div>
      <MainNav />
      <Carousel />
      <AboutUs />
      <OurServices />
      <ImageSection />
      <Proj />
    </div>
  );
}

export default Home;
