import React from "react";
import { motion } from "framer-motion";

const Fonctionaliter = () => {
  return (
    <section
      className="flex justify-center items-center flex-col h-screen"
      id="Fonctionnalités"
    >
      {/* First div */}
      <div className="text-center">
        <h1 className="text-4xl font-bold relative py-8">
          Fonctionnalités{" "}
          <img
            src="images/Rectangle.png"
            alt=""
            className="absolute left-[19rem] top-[4rem] "
          />
        </h1>

        <p className="text-1xl">
          Notre application vous propose plusieurs fonctionnalités pour booster
          votre entreprise.
        </p>
      </div>

      {/* Second div containing images */}
      <div className="flex justify-center relative items-center space-x-4 mt-4">
        <div>
          <motion.img
            src="images/img1.png"
            alt="img1"
            className="w-50 h-auto cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              localStorage.removeItem("token")
                ? (window.location.href = "/dashboard")
                : (window.location.href = "/signin");
            }}
          />{" "}
          {/* Adjust width and height as needed */}
        </div>
        <motion.img
          src="images/img2.png"
          alt="img2"
          className="w-50 h-auto cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            localStorage.removeItem("token")
              ? (window.location.href = "/dashboard")
              : (window.location.href = "/signin");
          }}
        />
      </div>
    </section>
  );
};

export default Fonctionaliter;
