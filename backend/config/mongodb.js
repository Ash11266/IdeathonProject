import mongoose from "mongoose";
import 'dotenv/config'



const connectDB= async()=>{
    
    mongoose.connection.on('connected',()=>{
        console.log("DB Connected");
    })
    await mongoose.connect("mongodb+srv://bhavik85746:pefa74Ol6F26P5dJ@cluster0.8rpbk.mongodb.net")


}
        


console.log('Connection string:', process.env.MONGODB_URI);

export default connectDB;
