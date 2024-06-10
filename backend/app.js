//dotenv to read from env files
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var errorHandler = require('./middleware/error');
const cors = require('cors');
const cookieParser = require( "cookie-parser" );

//import routes
const jobRoutes = require('./routes/jobsRoutes');

//database connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err))

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({
    limit:'5mb',
    extended: true}
));
app.use( cookieParser() );
app.use(cors());

//Route Middleware
app.use('/api',jobRoutes)

//Error Middleware
app.use(errorHandler);



//port 
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

module.exports = app