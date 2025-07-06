import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js'

const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n Mongodb connected!! HOST: ${connectionInstance.connection.host}` );
         // Drop the index
        // await mongoose.connection.collection("users").dropIndex("name_1");
        // console.log("✅ Dropped name_1 index");

    } catch (error) {
        console.log("MONGODB Connection error ", error);
        process.exit(1);
    }
}

export default connectDB;