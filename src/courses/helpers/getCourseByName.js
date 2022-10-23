import { courses } from "../data/courses";


export const getCourseByName = (name = '') => {
    if (name.length === 0) return[];

    name = name.toLocaleLowerCase().trim();
    
    return courses.filter(
        course => course.name.toLocaleLowerCase().includes(name)
    );
}