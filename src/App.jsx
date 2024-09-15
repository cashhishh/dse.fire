import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MobileNavbar from "./Components/MobileNavbar";
import MainNav from "./Components/MainNav";
import Carousel from "./Components/Carousal"; // Fixed typo: Carousal to Carousel
import AboutUs from "./Components/AboutUs";
import OurServices from "./Components/OurServices";
import ImageSection from "./Components/ImageSection";
import Proj from "./Components/Proj";
import Footer from "./Components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Home from "./pages/Home"; // Fixed typo: home to Home
import ExecutedProject from "./pages/ExecutedProject";

import Ongoingproject from "./pages/OngoingProject";
import CompanyProf from "./pages/CompanyProf";
import MissionPage from "./pages/Mission";
import Ourteam from "./pages/Ourteam";
import Certifications from "./pages/Certifications";
import Services from "./pages/Services";
import Industry from "./pages/Industry";
import Contact from "./pages/Contact";
import Firefighting from "./pages/Firefighting";
import PlumbingWork from "./pages/PlumbingWork";
function App() {
  return (
    <Router>
      <div>
        <MainNav />

        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industry" element={<Industry />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/ExecutedProject" element={<ExecutedProject />} />
            <Route
              path="projects/ExecutedProject"
              element={<ExecutedProject />}
            />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/fire-fighting" element={<Firefighting />} />
            <Route path="/sanitoryWork" element={<PlumbingWork />} />
            <Route path="/OngoingProject" element={<Ongoingproject />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/our-team" element={<Ourteam />} />
            <Route path="company-profile" element={<CompanyProf />} />
            <Route
              path="projects/OngoingProject"
              element={<Ongoingproject />}
            />

            {/* Add other routes here */}
          </Routes>
        </div>
        {/* Uncomment these components as needed */}
        {/* <Carousel />
        <AboutUs />
        <OurServices />
        <ImageSection />
        <Proj /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
