import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from "axios";
import JobDetails from './JobDetails';
import {Link} from 'react-router-dom';


const Home = ()=>{
    const [jobDetails, setJobDetails] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/api/jobs")
          .then(response => setJobDetails(response.data.jobDetails))
          .catch(error => console.error(error));
      }, []);

    return (
       <>
       <Navbar />
        <h1>Job Details</h1>
        <TableContainer>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Services</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobDetails.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.jobType}
                <Link to={row._id}>Details</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
       </>
    )
}

export default Home