import express from "express";
import cors from "cors";
import dotenv from "dotenv";

//@ts-ignore
import connectDB from "./db/db";
import generateToken from "./utils/generateToken";

import User from "./db/models/userModel";

const app = express();
const port = process.env.PORT || 8080;

dotenv.config();
connectDB();

app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));

app.post("/api/register", (req, res) => {
  const { name, username, email, password } = req.body;

  const registerToDb = async () => {
    try {
      const userExist = await User.findOne({ email });
      const usernameExist = await User.findOne({ username });

      if (userExist) {
        res.status(418).json("email already registered");
      } else if (usernameExist) {
        res.status(418).json("username already registered");
      } else {
        const register = await User.create({
          name: name,
          username: username,
          email: email,
          password: password,
        });

        res.status(200).json(register);
      }
    } catch (error) {
      res.status(400).json(error);
    }
  };
  registerToDb();
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const loginFromDb = async () => {
    const user = await User.findOne({ email });
    //@ts-ignore
    user && (await user.matchPassword(password))
      ? res.status(200).json({
          name: user.name,
          email: user.email,
          id: generateToken(user._id),
        })
      : res.status(401).json("Invalid email or password");
  };

  loginFromDb();
});

app.use("/", (req, res) => res.send("API is running..."));

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
