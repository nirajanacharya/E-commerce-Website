
const express = require('express'); 
const app = express();  
const dbConnect = require('./db');

const dotenv = require('dotenv');   
dotenv.config();

dbConnect();


module.exports = app;