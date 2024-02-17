import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import SimulationDashboard from "./SimulationDashboard.jsx";
import CoursesDashboard from "./CoursesDashboard.jsx";

const Dashboard = () => {
  const nom = localStorage.getItem("Nom");

  const [mode, setMode] = React.useState("Simulation");
  const options = ["Simulation", "E-learning"];
  const defaultOption = options[0];

  return (
    <div className="flex flex-col items-start justify-start w-full h-full gap-14 px-10 py-10">
      <div className="flex flex-col gap-14 w-full">
        <div className="flex justify-between w-full">
          <div>
            <h2 className="text-4xl font-semibold">Hi {nom}...</h2>
            <h2 className="text-xs font-semibold  mt-2 opacity-50">
              welcome back to your dashboard manager
            </h2>
          </div>
          <div>
            <Dropdown
              controlClassName="bg-white border border-primary rounded-xl p-3 w-60"
              options={options}
              value={defaultOption}
              placeholder="Select an option"
              onChange={(e) => {
                setMode(e.value);
              }}
            />
          </div>
        </div>
      </div>
      {mode === "Simulation" ? <SimulationDashboard /> : <CoursesDashboard/>}
    </div>
  );
};

export default Dashboard;
