const express = require('express');
const router = express.Router();
const {createJob,jobs,singleJob,updateJob,deleteJob} = require('../controllers/jobsController');

//Post Request for creating jobs
router.post('/createJob',createJob);
//Get Request for all jobs
router.get('/jobs',jobs);
//Get Request for a single job
router.get('/jobs/:_id',singleJob);
//Update single job by ID
router.put('/jobs/update/:id',updateJob);
//Delete single job by ID
router.delete('/jobs/delete/:id',deleteJob);

module.exports = router;