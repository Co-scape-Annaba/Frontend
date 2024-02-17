import Card from './Card';
import Courses from '../../../../data/courses.json';


export default function CourseList(props) {
  return (
    <div className=''>
      <h1 className='font-bold text-left p-4'>{props.listName}</h1>
      <div className='courseList overflow-hidden'>
        <div className="flex gap-4 overflow-x-auto">
          {Courses.map((course) => {
            return <Card key={course.id} course={course} />
          })}
        </div>
      </div>
    </div>


  );
}