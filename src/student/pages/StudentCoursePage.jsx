import { CoursesListComponents } from "../../courses"
import { StudentNavbar } from "../components"

export const StudentCoursePage = () => {
  return (
    <>
      <StudentNavbar />
      <h1>STUDENT COURSE LIST</h1>
      <CoursesListComponents/>
    </>
  )
}
