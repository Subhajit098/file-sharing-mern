import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";


const dbUri = "mongodb+srv://vickeydey8832:"+ process.env.PASSWORD +"@file-sharing-mern.3wfrlgu.mongodb.net/?retryWrites=true&w=majority"

const dbConnection= async()=>{
    try{
       await mongoose.connect(dbUri,{useNewUrlParser:true});
       console.log("Database connected Successfully");
    }
    catch(err){
        console.log("Error :",err.message);
    }
}

export default dbConnection;