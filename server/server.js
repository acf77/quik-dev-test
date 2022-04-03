import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

// import connectDB from "./db/db.js";

// const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const app = express();
const port = process.env.PORT || 8080;

dotenv.config();
// connectDB();

app.use(cors({ origin: "http://localhost:3000" }));

app.use("/", (req, res) => res.send("API is running..."));

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
