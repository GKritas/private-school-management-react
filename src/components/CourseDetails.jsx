import React from 'react';

function CourseDetails({ course }) {
  return (
    <div className='bg-primary'>
      <div className='d-flex justify-content-between align-items-center px-3 py-2'>
        <h3>{course.name}</h3>
        <button type='button' className='btn btn-secondary'>Back</button>
      </div>
      <div className='p-3'>
        <p><strong>Description:</strong> {course.description}</p>
        <p><strong>Start Date:</strong> {course.startDate}</p>
        <p><strong>End Date:</strong> {course.endDate}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Fee:</strong> {course.fee}</p>
      </div>
    </div>
  );
}

export default CourseDetails;
