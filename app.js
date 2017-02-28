const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
require('./config/passport')(passport);

//connect to db
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to db'+config.database);
});

//on error
mongoose.connection.on('error',(err)=>{
    console.log('Database error:'+ err);
});

const app = express();

const users = require('./routes/users');

const port = 3000;
//CORS middleware
app.use(cors());

//Set Static folder
app.use(express.static(path.join(__dirname,'public')));

//Body parser middleware
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());



app.use('/users',users);

app.get('/',(req,res)=>{
    res.send('Invalid endpoint');
});

app.listen(port,()=>{
    console.log(`server started on port${port}`);
});