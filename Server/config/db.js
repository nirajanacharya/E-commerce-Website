
const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');   

const dbConnect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Database connected successfully');

    }catch(err){
        console.log(err);
    }   
}

module.exports = dbConnect;
