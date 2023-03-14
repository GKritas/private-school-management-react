import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from './Header';
import { useNavigate } from 'react-router-dom';


export default function CourseList() {

  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  function handleClick() {
    navigate('/add-course')
  }


  useEffect(() => {
    axios.get('http://localhost:8080/api/courses')
      .then(response => {
        setCourses(response.data._embedded.courses);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div className='bg-primary'>
      <Header />
      <div className='d-grid justify-content-center'>
        <button type='button' className='btn btn-success center m-2' onClick={handleClick}>Add Course</button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Start Date</TableCell>
              <TableCell align="right">End Date</TableCell>
              <TableCell align="right">Duration</TableCell>
              <TableCell align='right'>Fee</TableCell>
              <TableCell align='right' />
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course) => (
              <TableRow
                key={course.courseId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="course">
                  {course.name}
                </TableCell>
                <TableCell align="right">{course.description}</TableCell>
                <TableCell align="right">{course.startDate}</TableCell>
                <TableCell align="right">{course.endDate}</TableCell>
                <TableCell align="right">{course.duration}</TableCell>
                <TableCell align='right'>{course.fee}</TableCell>
                <button type='button' className='btn btn-success m-2'>Update</button>
                <button type='button' className='btn btn-warning'>Delete</button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}



// import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function CourseList() {

//   return (
//     <div>
//       {courses.map(course => (
//         <div key={course._links.self.href}>
//           <h2>{course.name}</h2>
//           <p>{course.description}</p>
//           <p>Start Date: {course.startDate}</p>
//           <p>End Date: {course.endDate}</p>
//           <p>Duration: {course.duration}</p>
//           <p>Fee: {course.fee}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CourseList;
