import * as React from 'react';
import { useState, useEffect } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { deleteCourseApi, retrieveAllCoursesApi } from '../api/CourseApiService';
import './CourseList.css';
import CourseForm from '../courseForm/CourseForm';



export default function CourseList() {
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const deleteCourse = (link) => {
    deleteCourseApi(link)
      .then(() => {
        setCourses(courses.filter(course => course._links.self.href !== link));
      })
      .catch(error => {
        console.log(error);
      });
  }


  const handleAddCourse = () => {
    setSelectedCourse(null);
    setShowForm(true);
  }

  const handleUpdateCourse = (course) => {
    setSelectedCourse(course);
    setShowForm(true);
  }

  const handleCloseForm = () => {
    setShowForm(false);
  }

  const refreshTable = () => {
    retrieveAllCoursesApi()
      .then(response => {
        setCourses(response.data._embedded.courses);
      })
      .catch(error => {
        console.log(error);
      });
  }
  useEffect(() => {
    refreshTable();
  }, [])

  return (
    <div className="course-list">
      <Header />
      <h2>Course List</h2>
      <button className="btn-add" onClick={handleAddCourse}>Add Course</button>
      {showForm && (
        <CourseForm course={selectedCourse} handleCloseForm={handleCloseForm} refreshTable={refreshTable}/>
      )}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Duration</th>
            <th>Fee</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr
              key={course._links.self.href}
              className="course-row"
            >
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>{course.startDate}</td>
              <td>{course.endDate}</td>
              <td>{`${course.duration} days`}</td>
              <td>{course.fee === 0 ? "Free" : `${course.fee} $`}</td>
              <td>
                <div className='actions'>
                  <button className="btn-update" onClick={() => handleUpdateCourse(course)}>Update</button>
                  <button className="btn-delete" onClick={() => deleteCourse(course._links.self.href)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
}
