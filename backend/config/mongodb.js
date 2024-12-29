import mongoose from "mongoose";
import 'dotenv/config'

const connectDB = async () => {
    try {
      console.log("Attempting to connect...");
      await mongoose.connect("mongodb+srv://bhavik85746:pefa74Ol6F26P5dJ@cluster0.8rpbk.mongodb.net/myDatabase", {
        tls: true,
        connectTimeoutMS: 30000, // 30 seconds timeout
      });
      console.log("DB Connected");
    } catch (error) {
      console.error("Connection Error:", error);
    }
  }; 


console.log('Connection string:', "mongodb+srv://bhavik85746:pefa74Ol6F26P5dJ@cluster0.8rpbk.mongodb.net");

export default connectDB;
