export default function CourseStat(props) {
  console.log(props);
  const percentage = (props.completedCourses / props.registeredCourses) * 100;
  console.log(percentage);

  return (
    <div className="flex">
      <div className="p-3 m-2 bg-white border border-gray-200 rounded-lg shadow w-fit">
        <div className="flex gap-2">
          <h1 className="text-lg font-semibold w-full ">Cours Complété</h1>
          <img src="icons/trending.svg" alt="" />
        </div>

        <div className="flex justify-center items-center gap-2">
          <div className="flex w-full bg-gray-200 rounded-full h-1.5">
            <div
              className="bg-blueC h-1.5 rounded-full "
              style={{ width: percentage + "%" }}
            />
          </div>
          <h1 className="text-sm font-semibold  ">{percentage}%</h1>
        </div>
      </div>

      <div className=" min-w-48 max-w-60 p-2 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700">
        <div className="flex justify-around p-2">
          <p className="text-lg font-semibold  ">Cours inscrits</p>
          <p className="text-2xl   ">{props.registeredCourses}</p>
        </div>
      </div>
    </div>
  );
}
