import React from "react";
import MailButton from "./Mailbtn";
const Footer = () => {
  return (
    <section className="bg-black " id="Contactez-nous">
      <div className=" flex  p-8">
        <div className="w-1/4">
          <img src="ico.svg" />
        </div>
        <div className="w-1/4 ">
          <p className="font-bold text-white text-2xl">Navigation</p>
          <p className="text-white my-2">Accueil</p>
          <p className="text-white my-2">Mon compte</p>
        </div>
        <div className="w-1/4 ">
          <p className="font-bold text-white text-2xl">A decouvrir </p>
          <p className="text-white my-2">nos courses </p>
          <p className="text-white my-2"> simuler une idee</p>
        </div>
        <div className="w-1/4 ">
          <p className="font-bold text-white text-2xl my-2">Nous contacter</p>
          <MailButton></MailButton>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <hr className="w-60 h-1 my-2 bg-white rounded"></hr>
        <p className="text-white">StartMeUp @2024</p>
      </div>
    </section>
  );
};

export default Footer;
