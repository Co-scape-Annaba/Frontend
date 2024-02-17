import React from "react";

const scrollToContact = () => {
  const contactSection = document.getElementById("A propos");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

const HeroSection = () => {
  return (
    <section className="px-32 h-screen pt-16" id="acceuil">
      <div className="flex relative items-center gap-32 pt-14">
        <img
          src="images/wave.png"
          alt="wave"
          className="w-400 h-100 mr-30 absolute right-[69rem] bottom-[-14rem] z-10"
        />

        <p className="text-5xl font-bold pl-500 relative z-20">
          Achieve Greatness: Where New Businesses and Investors Thrive Together!
        </p>

        <img src="images/person.png" alt="person" className="w-400 h-300" />
      </div>

      <div className="flex justify-center items-center absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <img
          src="icons/down.png"
          alt="person"
          className="w-300 h-200 cursor-pointer"
          onClick={scrollToContact}
        />
      </div>
    </section>
  );
};

export default HeroSection;
