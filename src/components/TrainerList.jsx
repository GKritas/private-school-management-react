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
import Header from './header/Header';
import Footer from './footer/Footer';


export default function TrainerList() {

  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/trainers')
      .then(response => {
        setTrainers(response.data._embedded.trainers);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className='d-grid justify-content-center'>
        <button type='button' className='btn btn-success center'>Add Trainer</button>
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
              <TableCell>Hire Date</TableCell>
              <TableCell>Salary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trainers.map((trainer) => (
              <TableRow
                key={trainer.firstName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="course">
                  {trainer.firstName}
                </TableCell>
                <TableCell align="right">{trainer.lastName}</TableCell>
                <TableCell align="right">{trainer.address}</TableCell>
                <TableCell align="right">{trainer.email}</TableCell>
                <TableCell align="right">{trainer.phoneNumber}</TableCell>
                <TableCell align='right'>{trainer.dateOfBirth}</TableCell>
                <TableCell align='right'>{trainer.gender}</TableCell>
                <TableCell align='right'>{trainer.hireDate}</TableCell>
                <TableCell align='right'>{trainer.salary}</TableCell>
                <button type='button' className='btn btn-success'>Update</button>
                <button type='button' className='btn btn-warning'>Delete</button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer/>
    </div>
  );
}

