import mongoose from "mongoose";
import 'dotenv/config'

const connectDB = async () => {
  mongoose.connection.on('connected',()=>{
    console.log("DB connected")
  });
    try {
      console.log("Attempting to connect...");
      await mongoose.connect(process.env.MONGODB_URI);
      
    } catch (error) {
      console.error("Connection Error:", error);
    }
  }; 




export default connectDB;
