import mongoose from "mongoose";
import dns from "dns";

dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}` , {
            family: 4,
        });
        console.log("mongo db connected successfully");
    } catch (error) {
        console.log("error in connecting mongodb");
        throw error;
    }
}

export default connectDB;