import mongoose from "mongoose";
import { MONGO_QUERY } from "./env.config";

const connectDb = async () =>{
    try{
        const client = await mongoose.connect(MONGO_QUERY);
        console.log(`mongodb connected: ${client.connection.host}`);
    }catch(err){
        console.error(err);
        process.exit(0);
    }
}

export default connectDb;