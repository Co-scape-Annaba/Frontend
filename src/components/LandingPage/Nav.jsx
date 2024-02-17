import React, { useState, useEffect } from "react";

import { motion as m } from "framer-motion";

const Nav = ({ activeSection, handleClick }) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, [scroll]);

  return (
    <div
      className={` fixed w-full flex justify-between p-5 z-50 
      ${
        window.scrollY > 10
          ? "border-b-2 border-gray-200 bg-white"
          : "border-b-0 bg-transparent"
      }
      `}
    >
      {/* Left side: Image */}
      <div className="flex items-center space-x-2">
        <img src="ico.svg" alt="Logo" />
        <h1 className="text-3xl font-bold text-primary font-poppins">
          StartMeUp
        </h1>
      </div>

      {/* Center: Three words */}
      <div className="flex gap-8">
        <m.div
          className={`relative overflow-hidden cursor-pointer ${
            activeSection === "acceuil" ? "nav-link" : ""
          }`}
          onClick={() => handleClick("acceuil")}
          initial={false}
        >
          Accueil
        </m.div>
        <div
          className={`relative overflow-hidden cursor-pointer ${
            activeSection === "A propos" ? "nav-link" : ""
          }`}
          onClick={() => handleClick("A propos")}
        >
          A propos
        </div>
        <div
          className={`relative overflow-hidden cursor-pointer ${
            activeSection === "Fonctionnalités" ? "nav-link" : ""
          }`}
          onClick={() => handleClick("Fonctionnalités")}
        >
          Fonctionnalités
        </div>
        <div
          className={`relative overflow-hidden cursor-pointer ${
            activeSection === "Contactez-nous" ? "nav-link" : ""
          }`}
          onClick={() => handleClick("Contactez-nous")}
        >
          Contactez-nous
        </div>
      </div>

      <div className="flex gap-8 items-center">
        {!localStorage.getItem("token") && (
          <m.button
            className="bg-primary text-white py-2 px-4 rounded-lg items-center hover:bg-white hover:text-primary border-primary border transition-all duration-300"
            onClick={() =>
              localStorage.getItem("token")
                ? (window.location.href = "/dashboard")
                : (window.location.href = "/signup")
            }
          >
            S'incrire
          </m.button>
        )}
        <m.button
          className="bg-wwhite text-primary border-primary border rounded-lg py-2 px-4 items-center hover:bg-primary hover:text-white transition-all duration-300"
          onClick={() =>
            localStorage.getItem("token")
              ? (window.location.href = "/dashboard")
              : (window.location.href = "/signin")
          }
        >
          {localStorage.getItem("token") ? "Mon compte" : "Se connecter"}
        </m.button>
      </div>
    </div>
  );
};

export default Nav;
