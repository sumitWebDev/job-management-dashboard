import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';

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
      <ul>
        <li>{jobDetails.customerName}</li>
        <li>{jobDetails.jobType}</li>
        <li>{jobDetails.status}</li>
        <li><Moment format="YYYY/MM/DD">{jobDetails.createdAt}</Moment></li>
        <li>{jobDetails.technician}</li>
      </ul>
    ):"Loading"
    return (
       <>   
        {jobList}
       </>
    )
}

export default JobDetails