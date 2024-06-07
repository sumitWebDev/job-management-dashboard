const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
    customerName:{
        type:String,
        trim:true,
        required: [true, 'Customer Name is required']
    },
    jobType:{
        type:String,
        trim:true,
        required: [true, 'Job Type is required']
    },
    status:{
        type:String,
        trim:true,
        required: [true, 'Status is required']
    },
    technician:{
        type:String,
        trim:true,
        required: [true, 'Technician name is required']
    },
},{timestamps:true})

module.exports = mongoose.model("job",jobSchema)