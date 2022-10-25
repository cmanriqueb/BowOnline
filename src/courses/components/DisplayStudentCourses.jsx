import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import {useForm} from '../../hooks/useForm';
import {getCoursesFromEnrolments} from '../helpers'
import { CourseCard } from "./CourseCard";

export const DisplayStudentCourses = () => {

 const navigate = useNavigate();
 const location = useLocation();
 const {q='CM01'} = queryString.parse(location.search);
 const courses = getCoursesFromEnrolments(q);
 console.log(courses);

 const showSearchMessages = (q.length === 0);
 const showNotFoundMessage = (q.length > 0) && courses.length === 0;

  const {searchText, onInputChange} = useForm({
    searchText: q
  });

  return (
    <>
    <h1>STUDENT COURSES</h1>
    <hr />
    <h3>Carlos is currently enroled in:</h3>
    <div className="row">
        <div className="col-7">
            <hr />
            <div className="alert alert-primary" style={{ display: showSearchMessages ? '' : 'none'}}>
                Search a course
            </div>
            <div className="alert alert-danger"style={{ display: showNotFoundMessage ? '' : 'none'}}>
                No course found with name <b>{q}</b>
            </div>
            <div className="col-6">{
                    courses.map( course => (
                        <CourseCard key={course.id} {...course}/>
                    ))
                }
            </div>
        </div>
    </div>
    </>
  )
}
