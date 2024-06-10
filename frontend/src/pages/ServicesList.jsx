import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import axios from "axios";
import {Link} from 'react-router-dom';
import Container from '@mui/material/Container';



const ServicesList = ()=>{
    const [jobDetails, setJobDetails] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/jobs")
          .then(response => setJobDetails(response.data.jobDetails))
          .catch(error => console.error(error));
      }, []);
    
    const deleteJob = (event)=>{
      let id = event.target.id;
      try {
        axios.delete(`http://localhost:3000/api/jobs/delete/${id}`)
        .then(()=>setJobDetails(jobDetails.filter((val)=>{
            return val._id !== id;
          })
        ));
      } catch (error) {
        console.error('A problem occurred with your fetch operation: ', error);
      }
    }

    return (
       <>
       <Navbar />
       <Container maxWidth="lg">
          <h2> <Link to={'/newJob'}>Create New Job</Link> </h2>
          <TableContainer>
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" style={{fontSize: '28px'}}><b>Services</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobDetails.map((row) => (
                <TableRow
                  key={row._id}
                >
                  <TableCell component="th" scope="row">
                    <Grid container spacing={2}>
                        <Grid item xs={3} style={{textTransform: 'Capitalize'}}>
                        {row.jobType}
                        </Grid>
                        <Grid item xs={3}>
                        <Link to={`/job/${row._id}`}>Details</Link>
                        </Grid>
                        <Grid item xs={3}>
                        <Link to={`/update/${row._id}`}>Edit</Link>
                        </Grid>
                        <Grid item xs={3}>
                        <button onClick={deleteJob} id={row._id} style={{background:'transparent',cursor:'pointer'}}>Delete</button>
                        </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      </>
    )
}

export default ServicesList