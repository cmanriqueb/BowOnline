import { Routes, Route } from "react-router-dom"
import { StudentContactFormPage, StudentCoursePage , StudentCourseSearchPage, StudentHomePage, StudentNavbar } from '../';

export const StudentsRoutes = () => {
  return (
    <>
    <StudentNavbar/>
    <Routes>
            <Route path="/sHomePage" element={<StudentHomePage />} />
            <Route path="/sCourses" element={<StudentCoursePage />} />
            <Route path="/sCourseSearch" element={<StudentCourseSearchPage />} />
            <Route path="/sContactForm" element={<StudentContactFormPage />} />
    </Routes>
    </>
  )
}
