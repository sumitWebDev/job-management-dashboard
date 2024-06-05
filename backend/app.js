const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
var bodyParser = require('body-parser');
var errorHandler = require('./middleware/error');
//dotenv to read from env files
require('dotenv').config();


//database connection
mongoose.connect(process.env.DATABASE)
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err))

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({
    limit:'5mb',
    extended: true}
));

//Error Middleware
app.use(errorHandler)

//port 
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})