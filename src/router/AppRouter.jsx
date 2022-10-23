import { Routes, Route } from "react-router-dom"

import { AdminHomePage } from '../admin/pages/AdminHomePage';
import { StudentContactFormPage, StudentCoursePage , StudentCourseSearchPage, StudentHomePage, StudentLoginPage, StudentSignUpPage, StudentsRoutes } from '../student';
import { WelcomePage } from "../ui/pages/WelcomePage";

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/*" element={<WelcomePage />} />
            <Route path="/sHomePage" element={<StudentsRoutes />} />
            <Route path="/aHomePage" element={<AdminHomePage />} />
            <Route path="/sHomePage" element={<StudentHomePage />} />
            <Route path="/sCourses" element={<StudentCoursePage />} />
            <Route path="/sLogin" element={<StudentLoginPage />} />
            <Route path="/sSignUp" element={<StudentSignUpPage />} />
            <Route path="/sCourseSearch" element={<StudentCourseSearchPage />} />
            <Route path="/sContactForm" element={<StudentContactFormPage />} />
        </Routes>
    </>
  )
}
