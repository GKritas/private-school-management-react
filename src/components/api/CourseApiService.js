import axios from "axios";

export const retrieveAllCoursesApi =
    () => axios.get('http://localhost:8080/api/courses')

export const retrieveCourseApi =
    (link) => axios.get(link)

export const deleteCourseApi =
    (link) => axios.delete(link)

export const createCourseApi =
    (course) => axios.post('http://localhost:8080/api/courses', course)

export const updateCourseApi =
    (link, course) => axios.put(link, course)