const job = require('../models/jobModel');
const ErrorResponse = require('../utils/errorResponse');

//create jobs
exports.createJob = async(req,res,next) =>{
    console.log(req)
    try{
        const jobDetails = await job.create({
            customerName: req.body.customerName,
            jobType:req.body.jobType,
            status:req.body.status,
            technician:req.body.technician
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

//get job by id
exports.singleJob = async (req,res,next) =>{
    try{
        console.log(req.params._id)
        const jobDetails = await job.findById(req.params._id);
        console.log(jobDetails)
        res.status(200).json({
            success: true,
            jobDetails
        })
    }catch(error){
        next(error);
    }
}

//update job by id
exports.updateJob = async (req,res,next) =>{
    try{
        console.log(req.params)
        const jobDetails = await job.findByIdAndUpdate(req.params.id,req.body,{new: true});

        res.status(200).json({
            success: true,
            jobDetails
        })
    }catch(error){
        next(error);
    }
}

//delete job by id
exports.deleteJob = async (req,res,next) =>{
    try{
        console.log(req.params)
        const jobDetails = await job.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "Job is deleted"
        })
    }catch(error){
        next(new ErrorResponse("server error", 500));
    }

}