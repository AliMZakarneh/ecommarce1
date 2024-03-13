import mongoose from "mongoose";

const connectDB = async()=>{
    return await mongoose.connect(process.env.DB).then(()=>{
        return console.log("connected successfully");
    }).catch((err)=>{
        return console.log(`error to connect DB ${err}`);
    });

}

export default connectDB;