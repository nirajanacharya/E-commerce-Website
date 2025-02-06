const http = require('http');

const dotenv =require('dotenv');
require('dotenv').config();
const app = require('./config/app');


const server = http.createServer(app);
const port =process.env.PORT || 9000;


server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})


