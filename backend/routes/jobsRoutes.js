const express = require('express');
const router = express.Router();
const {createJob,jobs} = require('../controllers/jobsController');

//Post Request for creating jobs
router.post('/createJob',createJob);
router.get('/jobs',jobs)

module.exports = router;