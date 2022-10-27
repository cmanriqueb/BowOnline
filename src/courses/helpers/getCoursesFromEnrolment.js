import { courses, enrolments } from "../data";


export const getCoursesFromEnrolments = (studentID = '') => {
    if (studentID.length === 0) return[];
    var studentEnrolments = [];

    studentID = studentID.toLocaleLowerCase().trim();

    const enrolmentsJSON = localStorage.getItem('enrolments');

    if(enrolmentsJSON){
        studentEnrolments =  JSON.parse(enrolmentsJSON).filter(
            enrolment => enrolment.studentId.toLocaleLowerCase().includes(studentID)
        );
    }else{
        studentEnrolments = enrolments.filter(enrolment => enrolment.studentId.toLocaleLowerCase().includes(studentID));
    }

    console.log('studentEnrolments');
    console.log(JSON.stringify(studentEnrolments));

    var studentCourses = [];
    studentEnrolments.forEach(element => {
        studentCourses.push(element.courseId.toLocaleUpperCase());
    });
    console.log(studentEnrolments.length);

    console.log('studentCourses');
    console.log(studentCourses);

    var coursesToReturn = [];
    studentCourses.map( x => courses.filter(course => course.id.includes(x)).forEach(ret => coursesToReturn.push(ret)));

    console.log(coursesToReturn);
    
    return coursesToReturn;
}