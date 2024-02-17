// LandingPage.js
import React, { useState } from "react";
import Nav from "../components/LandingPage/Nav.jsx";
import HeroSection from "../components/LandingPage/HeroSection.jsx";
import Pourquoi from "../components/LandingPage/Pourquoi.jsx";
import Fonctionaliter from "../components/LandingPage/Fonctionaliter.jsx";
import Footer from "../components/LandingPage/Footer.jsx";

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState("acceuil");

  const handleClick = (section) => {
    setActiveSection(section);
    const targetSection = document.getElementById(section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Nav activeSection={activeSection} handleClick={handleClick} />
      <HeroSection id="acceuil" />
      <Pourquoi id="A propos" />
      <Fonctionaliter id="Fonctionnalités" />
      <Footer id="Contactez-nous" />
    </div>
  );
};

export default LandingPage;
