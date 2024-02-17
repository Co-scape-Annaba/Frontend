import React from "react";

const Pourquoi = () => {
  return (
    <section id="A propos">
      <div className="bg-primary flex items-center px-20 py-20">
        <img src="images/board.png" alt="board" className="h-300 w-100 mr-9" />{" "}
        {/* Set width to 20 units and maintain aspect ratio */}
        <div className="flex-col">
          <div className="relative">
            <p className="text-4xl font-bold text-tertiary relative z-20">
              Pourquoi StartMeUp?
            </p>
            <img
              src="images/prop.png"
              alt=""
              className="absolute w-56 h-10 right-[24rem] bottom-0 z-10"
            />
          </div>

          <p className=" text-tertiary text-2xl my-5">
            Notre plateforme vous guide à chaque étape du chemin vers le succès,
            que vous soyez porteur didée, entrepreneur ou investisseur.
            Ensemble, atteignons de nouveaux sommets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pourquoi;
