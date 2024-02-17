export default function Card(data) {
  const course = data.course;

  const percentage = (course.completedLessons * 100) / course.totalLessons;

  const students = course.students / 1000 + "k";

  return (
    <div
      id={course.id}
      className="w-full min-w-80 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700"
      onClick={() => {
        window.location.href = `/course/:${course.id}`;
      }}
    >
      <img
        className="px-8 pt-8 rounded-t-lg"
        src={course.banner}
        alt="course illustration"
      />

      <div className="flex flex-col justify-around px-5 pb-5">
        <div>
          <div className="flex pb-3 items-center mt-2">
            <span className="bg-blue-100 text-blue-100 text-xs font-meduim px-2.5 py-0.5 rounded dark:bg-blue-100 dark:text-gray-800 ms-3">
              {course.category}
            </span>
          </div>

          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-900 ">
            {course.title}
          </h5>

          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-white-700">
            <div
              className="bg-blue-800 h-1.5 rounded-full dark:bg-blue-800"
              style={{ width: percentage + "%" }}
            ></div>
          </div>

          <h5 className="text-xs font-bold tracking-tight underline-offset-2 text-gray-900 dark:text-gray underline decoration-cyan-600">
            More details
          </h5>
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>

        <div className="flex justify-around">
          <div className="flex">
            <iframe
              id="1"
              title="users"
              width="30px"
              height="30px"
              src="users.svg"
            />
            <p className="pl-1">{students}</p>
          </div>

          <div className="flex">
            <iframe
              id="2"
              title="stars"
              width="30px"
              height="30px"
              src="star.svg"
            />
            <p className="pl-1">{course.rating}</p>
          </div>

          <div className="flex">
            <p className="pr-2">{course.teacher}</p>
            <iframe
              id="3"
              title="avatar"
              width="30px"
              height="30px"
              src="avatar.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
