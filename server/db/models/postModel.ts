import mongoose from "mongoose";

interface Comments {
  id: number;
  content: string;
  date: string;
  username: string;
}

interface Post {
  id: number;
  name: string;
  username: string;
  post: string;
  date: string;
  comments: Comments[];
}

const commentSchema = new mongoose.Schema<Comments>({
  id: {
    type: Number,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

export const postSchema = new mongoose.Schema<Post>(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    post: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    comments: [commentSchema],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model<Post>("Post", postSchema);

export default Post;
