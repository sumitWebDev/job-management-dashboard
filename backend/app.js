const express = require('express');
const app = express();
const mongoose = require('mongoose');

//dotenv to read from env files
require('dotenv').config();


//database connection
mongoose.connect(process.env.DATABASE)
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err))


//port 
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})