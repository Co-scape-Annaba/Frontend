import CourseList from "../Courses/CourseList.jsx";
import CourseStat from "../Courses/CourseStat.jsx";

function CoursesDashboard() {
  const props = {
    completedCourses: 5,
    registeredCourses: 10,
  };

  return (
    <div>
      <CourseStat {...props}/>
      <CourseList listName={"Mes Cours"} />
    </div>
  );
}

export default CoursesDashboard;
