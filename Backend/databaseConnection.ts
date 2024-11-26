import mongoose from "mongoose";
import dotenv from "dotenv"

import express from "express";

const app = express()

dotenv.config()



const connectDB = async () =>{
    try {
        const connectionInstance =   await mongoose.connect(`${process.env.DBConnectionString}`);
        console.log(" MongoDB instance "+ connectionInstance);

    }
    catch(error) {
        console.log("MongoDB Connection error"+ error);
        process.exit(1)
    }
}

export default connectDB;