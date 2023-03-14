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


export default function StudentList() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/students')
      .then(response => {
        setStudents(response.data._embedded.students);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className='d-grid justify-content-center'>
        <button type='button' className='btn btn-success center'>Add Student</button>
        <hr/>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Guardian First Name</TableCell>
              <TableCell>Guardian Last Name</TableCell>
              <TableCell>Guardian Email</TableCell>
              <TableCell>Guardian Phone Number</TableCell>
              <TableCell>Enrollment Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow
                key={student.firstName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="course">
                  {student.firstName}
                </TableCell>
                <TableCell align="right">{student.lastName}</TableCell>
                <TableCell align="right">{student.address}</TableCell>
                <TableCell align="right">{student.email}</TableCell>
                <TableCell align="right">{student.phoneNumber}</TableCell>
                <TableCell align='right'>{student.dateOfBirth}</TableCell>
                <TableCell align='right'>{student.gender}</TableCell>
                <TableCell align='right'>{student.guardianFirstName}</TableCell>
                <TableCell align='right'>{student.guardianLastName}</TableCell>
                <TableCell align='right'>{student.guardianEmail}</TableCell>
                <TableCell align='right'>{student.guardianPhoneNumber}</TableCell>
                <TableCell align='right'>{student.enrollmentDate}</TableCell>
                <button type='button' className='btn btn-success'>Update</button>
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
