import mongoose from "mongoose";
import dotenv from "dotenv";

import sanitizedConfig from "../config";

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(sanitizedConfig.MONGO_URI, {
      //@ts-ignore
      useUnifiedTopology: true,
      useNewUrlParser: true,
      //   useCreateIndex: true,
    });
    //@ts-ignore
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
