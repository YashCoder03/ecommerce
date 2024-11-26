const {mongoose} = require("mongoose");
const dotenv = require("dotenv");
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

module.exports = connectDB;