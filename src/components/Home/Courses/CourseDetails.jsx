import Accordion from "./Accordion";

const handleback = () => {
  window.history.back();
}

export default function CourseDetails() {

  const percentage = 0;

  return (

    <div className="flex flex-col p-2 m-4 space-x-4 space-y-2 w-2/3">
      
      <div className="flex">
        <img src="arrow-back.svg" alt="arrow back" onClick={handleback}/>
        <h1 className="text-2xl font-bold text-left p-4 mb-2">Mes Cours</h1>
        <img src="arrow.svg" alt="arrow" />
      </div>

      <div className="flex justify-around">
        <div className="flex-col p-4 justify-items-start w-full min-w-40">
          <div className="flex pb-3">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 text-left">Maîtriser le Marketing Produit :
              De la Conception à la Commercialisation</h2>
          </div>

          <p className="text-sm mb-4 p-2 font-meduim tracking-tight text-gray-900 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-4 ">
            <div className="bg-[#DAA521] h-1.5 rounded-full" style={{ width: percentage }}></div>
          </div>

          <div className="flex justify-around m-3 w-full max-w-80">
            <div className="flex">
              <iframe id="1" title="users" width="30px" height="30px" src="users.svg" />
              <p className="pl-1">+100k</p>
            </div>

            <div className="flex">
              <iframe id="2" title="stars" width="30px" height="30px" src="star.svg" />
              <p className="pl-1">4.8</p>
            </div>

            <div className="flex">
              <p className="pr-2">Tom</p>
              <iframe id="3" title="avatar" width="30px" height="30px" src="avatar.svg" />
            </div>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 text-left">Contenu du cours</h2>
          <h3 className="text-sm font-light tracking-tight text-gray-900 text-left">5 sections • 14 sessions • Durée totale: 6h 30 min</h3>
        </div>

        <div className="flex flex-col items-center space-x-2 space-y-2 p-2 h-full w-full min-w-40 min-h-64">
          <img className="rounded-t-lg m-auto w-full max-h-48" src="cours-banner2.png" alt="course illustration"/>

          <div className="flex flex-col items-start space-y-2 w-full">
            <div className="bg-blue-100 text-gray-600 text-xs font-meduim px-2.5 py-0.5 rounded max-w-32">Marketing</div>
            <p className=" text-gray-600 text-lg font-bold">Prix : 120000 DA  </p>  
          </div>

          <div className="flex flex-col content-center items-center">
            <button className="bg-secondary text-white text-xs font-meduim px-2.5 py-1 rounded mt-2 w-full lg:h-[40px] md:h-[30px] max-w-40">Ajouter au panier</button>
            <button className="bg-primary text-white text-xs font-meduim px-2.5 py-1 rounded mt-2 w-full lg:h-[40px] md:h-[30px] max-w-40">Acheter dès maintenant</button>
          </div>
        </div>
      </div>

      <div className="flex m-4 justify-around">
        <Accordion />
      </div>


    </div>

  )
}