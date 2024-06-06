const job = require('../models/jobModel');
const ErrorResponse = require('../utils/errorResponse');

//create jobs
exports.createJob = async(req,res,next) =>{
    try{
        const jobDetails = await job.create({
            title: req.body.title
        });
        res.status(201).json({
            success: true,
            jobDetails
        })
    }catch (error){
        next(error)
    }
}

//get all jobs
exports.jobs = async(req,res,next) =>{
    try{
        const jobDetails = await job.find();
        res.status(200).json({
            success: true,
            jobDetails
        })
    }catch (error){
        next(error);
    }
}