import { CourseCard } from "./";
import { getCourses } from "../helpers/getCourses"


export const CoursesListComponents = () => {
  const courses = getCourses();

  return (
    <div className = "row rows-cols-1 row-cols-md-3 g-3">
      {
        courses.map( course => (
            <CourseCard
              key={course.id}
              {...course}
            />
        ))
      }
    </div>
  )
}
