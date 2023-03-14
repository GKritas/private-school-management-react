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


export default function AssignmentList() {

  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/assignments')
      .then(response => {
        setAssignments(response.data._embedded.assignments);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className='d-grid justify-content-center'>
        <button type='button' className='btn btn-success center'>Add Assignment</button>
        <hr/>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Due Date</TableCell>
              <TableCell align="right">Maximum Score</TableCell>
              <TableCell align='right'>Actual Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assignments.map((assignment) => (
              <TableRow
                key={assignment.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="course">
                  {assignment.name}
                </TableCell>
                <TableCell align="right">{assignment.description}</TableCell>
                <TableCell align="right">{assignment.dueDate}</TableCell>
                <TableCell align="right">{assignment.maximumScore}</TableCell>
                <TableCell align="right">{assignment.actualScore}</TableCell>
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
