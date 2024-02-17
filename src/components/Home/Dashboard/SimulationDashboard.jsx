import React from "react";
import axiosInstance from "../../../config/axiosConfig.js";
import { motion as m } from "framer-motion";

const SimulationDashboard = () => {
  const [ideas, setIdeas] = React.useState([]);
  const [filteredIdeas, setFilteredIdeas] = React.useState([]);
  const token = localStorage.getItem("token");
  const [query, setQuery] = React.useState("");

  function filterItems(items, query) {
    if (query === "") {
      return items;
    }
    return items.filter((item) => {
      return item.Title.toLowerCase().includes(query.toLowerCase());
    });
  }

  const handleChangeSearchBar = (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);

    // use the array of ideas to filter them
    const filteredIdeas = filterItems(ideas, searchTerm);
    setFilteredIdeas(filteredIdeas);
  };

  const loadIdeas = () => {
    axiosInstance
      .get("/ideas/all", { headers: { "x-access-token": token } })
      .then((response) => {
        console.log("Ideas:", response.data);
        setIdeas(response.data);
        setFilteredIdeas(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  React.useEffect(() => {
    loadIdeas();
  }, []);
  return (
    <>
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-5 items-center relative" id="search">
          <img
            src="icons/recherche.svg"
            alt="recherche icon"
            className="absolute left-3"
          />
          <input
            type="text"
            name="recherche"
            className="p-3 rounded-xl w-96 pl-10 focus:outline-primary border border-primary focus:ring-primary focus:border-primary"
            placeholder="Rechercher..."
            value={query}
            onChange={handleChangeSearchBar}
          />
        </div>
        <m.button
          className="rounded-xl bg-primary text-white font-semibold text-lg px-5 py-3"
          onClick={() => {
            window.location.href = "/simulate";
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Simuler une idée
        </m.button>
      </div>
      <div className="w-full">
        <h2 className="text-2xl font-semibold">Tableau des ideas</h2>
        <div className="overflow-hidden max-h-[230px] overflow-y-auto custom-scroll py-2 mt-3">
          <table className="w-full ">
            <thead className="border-b-2 border-gray-200">
              <tr className=" text-gray-500 text-sm font-semibold">
                <th className="text-left">Idea title</th>
                <th className="text-left">Domaine</th>
                <th className="text-left">Budget</th>
                <th className="text-left">Score</th>
                <th className="text-left">num of Remarques</th>
                <th className="text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredIdeas.map((idea) => (
                <tr
                  key={idea._id}
                  className="border-b-2 border-gray-200 text-sm font-semibold cursor-pointer hover:bg-gray-50 transition-all duration-200"
                  onClick={() => {
                    window.location.href = `/Results/:${idea._id}`;
                  }}
                >
                  <td className="py-5">{idea.Title}</td>
                  <td className="py-5">{idea.Domaine}</td>
                  <td className="py-5">{idea.Budget}</td>
                  <td className="py-5">{idea.Score}</td>
                  <td className="py-5">
                    {() => {
                      idea.Weaknesses.length + idea.Strenthgs.length;
                    }}
                  </td>
                  <td className="py-5">
                    <button
                      className="mr-5"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = `/Results/:${idea._id}`;
                      }}
                    >
                      <img src="icons/edit.svg" alt="edit icon" />
                    </button>
                    <button
                      className="mr-5"
                      onClick={(e) => {
                        e.stopPropagation();
                        axiosInstance
                          .delete(`/ideas/${idea._id}`, {
                            headers: { "x-access-token": token },
                          })
                          .then((response) => {
                            console.log("Idea deleted:", response.data);
                            //update the UI by removing the deleted idea
                            setIdeas(
                              ideas.filter(
                                (idea) => idea._id !== response.data._id
                              )
                            );
                            setFilteredIdeas(
                              filteredIdeas.filter(
                                (idea) => idea._id !== response.data._id
                              )
                            );
                          })
                          .catch((error) => {
                            console.error("Error deleting idea:", error);
                          });
                      }}
                    >
                      <img src="icons/delete.svg" alt="delete icon" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SimulationDashboard;
