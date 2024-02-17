import BackButton from "../UI/BackButton";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

const Results = () => {
  const percentage = 66;
  return (
    <>
      <BackButton />
      <h1 className="text-3xl font-bold text-center mt-10 font-poppins">
        Your idea will be successful at
      </h1>
      <div className="w-1/6 mx-auto mt-10">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: "#2F4F4E",
            pathColor: "#2F4F4E",
            trailColor: "#f2f2f2",
          })}
        />
      </div>
      <div className="flex justify-center mt-10 mx-10 gap-52">
        <div className="">
          <h1 className="text-2xl font-bold font-poppins">Weaknesses</h1>
          <ul className="list-disc ml-12">
            <li className="mt-5">
              <p>Weakness 1</p>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-2xl font-bold font-poppins">Strengths</h1>
          <ul className="list-disc ml-12">
            <li className="mt-5">
              <p>Strength 1</p>
            </li>
          </ul>
        </div>
      </div>
      <motion.button
        className="bg-primary text-white w-1/4 mx-auto mt-10 py-2 rounded-md font-poppins"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Share your results
      </motion.button>
    </>
  );
};

export default Results;
