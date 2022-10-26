import { courses } from "../data/courses";


export const getCourseByName = (name = '') => {
    if (name.length === 0) return[];

    const coursesJSON = localStorage.getItem('courses');
    name = name.toLocaleLowerCase().trim();

    if(coursesJSON){
        return JSON.parse(localStorage.getItem("courses")).filter(
            course => course.name.toLocaleLowerCase().includes(name)
        );
    }else{
        return courses.filter(
            course => course.name.toLocaleLowerCase().includes(name)
        );
    }
}