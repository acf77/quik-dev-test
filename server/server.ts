import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./db/db";
import generateToken from "./utils/generateToken";
import decodeToken from "./utils/generateToken";

import User from "./db/models/userModel";
import Post from "./db/models/postModel";

const app = express();
const port = process.env.PORT || 8080;

dotenv.config();
connectDB();

app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));

//@POST public create new user
app.post("/api/register", (req, res) => {
  const { name, username, email, password } = req.body;

  const registerToDb = async () => {
    try {
      const userExist = await User.findOne({ email });
      const usernameExist = await User.findOne({ username });

      if (userExist) {
        res.status(409).json("email already registered");
      } else if (usernameExist) {
        res.status(409).json("username already registered");
      } else {
        const register = await User.create({
          name: name,
          username: username,
          email: email,
          password: password,
          avatar: "",
          posts: [],
        });

        res.status(200).json(register);
      }
    } catch (error) {
      res.status(400).json(error);
    }
  };
  registerToDb();
});

//@POST public login registered user
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

//@PUT private add new post
app.put("/api/posts", (req, res) => {
  const { body } = req;

  const addPostToDb = async () => {
    try {
      const content = await User.updateOne(body.id, {
        $addToSet: {
          allPosts: [
            {
              name: body.name,
              username: body.username,
              post: body.post,
              date: body.date,
            },
          ],
        },
      });

      res.status(201).json(content);
    } catch (error) {
      res.status(401).json(error);
    }
  };

  addPostToDb();
});

//@GET private retrieves user info
app.get("/api/login", (req, res) => {
  const { id } = req.body;

  const decodedId = decodeToken(id);

  const loginDataFromDb = async () => {
    const user = await User.findOne({ decodedId });
    res.json(user?.allPosts);
  };

  loginDataFromDb();
});

//@GET private retrieves post info by id
app.get("/api/post", (req, res) => {
  const { id } = req.body;

  const postDataFromDb = async () => {
    const post = await Post.findOne({ id });
    res.json(post?.comments);
  };

  postDataFromDb();
});

//@GET private validates user id after decoding
app.get("/api/user/:id", (req, res) => {
  const { params } = req;

  const userDataFromDb = async () => {
    const user = await User.findOne(params);
    res.status(201).json({
      email: user?.email,
      name: user?.name,
      username: user?.username,
      posts: user?.allPosts,
    });
  };

  userDataFromDb();
});

app.use("/", (req, res) => res.send("API is running..."));

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
