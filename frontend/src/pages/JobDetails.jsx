import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import Navbar from '../components/Navbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import { useParams } from "react-router-dom"

import axios from "axios";


const JobDetails = ()=>{
  const { id } = useParams();
    const [jobDetails, setJobDetails] = useState();
    useEffect(() => {
        axios.get(`http://localhost:3000/api/jobs/${id}`)
          .then(response => setJobDetails(response.data.jobDetails))
          .catch(error => console.error(error));
      }, []);
    const jobList = jobDetails?(
      <TableRow
      key={jobDetails._id}
    >
      <TableCell component="th" scope="row">
      {jobDetails.customerName}
      </TableCell>
      <TableCell component="th" scope="row">
      {jobDetails.jobType}
      </TableCell>
      <TableCell component="th" scope="row">
      {jobDetails.status}
      </TableCell>
      <TableCell component="th" scope="row">
      <Moment format="YYYY/MM/DD">{jobDetails.createdAt}</Moment>
      </TableCell>
      <TableCell component="th" scope="row">
      {jobDetails.technician}
      </TableCell>
    </TableRow>
    ):"Loading"
    return (
       <>
       <Navbar />
       <Container maxWidth="lg">
          <TableContainer>
              <Table lg={{ minWidth: 100 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{fontSize: '14px'}}><b>Customer Name</b></TableCell>
                  <TableCell style={{fontSize: '14px'}}><b>Job Type</b></TableCell>
                  <TableCell style={{fontSize: '14px'}}><b>Status</b></TableCell>
                  <TableCell style={{fontSize: '14px'}}><b>Appointment Date</b></TableCell>
                  <TableCell style={{fontSize: '14px'}}><b>Technician</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {jobList}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
       </>
    )
}

export default JobDetails