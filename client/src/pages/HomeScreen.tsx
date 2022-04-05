import { useEffect, useState } from "react";
import { Box, Stack, Typography, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router";
import axios from "axios";

import { PostCard } from "../components/PostCard";
import { PostInput } from "../components/PostInput";

import { postData } from "../postData";
import { ButtonComponent } from "../components/ButtonComponent";

// interface PostProps {
//   email: string;
//   name: string;
//   username: string;
//   id: number;
// }

export const HomeScreen = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState();

  const [postContent, setPostContent] = useState();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userInfo"));
    data ? setLoading(false) : navigate("/");

    const jwtCall = async () => {
      try {
        const call = await axios.get(
          "http://localhost:8080/api/login",
          data.id
        );
        //@ts-ignore
        setId(call.data.id);
      } catch (error) {
        console.error(error.message);
      }
    };

    const getUserInfo = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/user/${id}`
        );
        setPosts(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    jwtCall();
    getUserInfo();
  }, []);

  const handlePostSave = async () => {
    // const { name, username } = posts;

    const call = await axios({
      method: "PUT",
      url: "http://localhost:8080/api/posts",
      headers: { "Content-Type": "application/json" },
      data: {
        id: id,
        name: posts.name,
        username: posts.username,
        post: postContent,
        date: new Date(),
      },
    });

    console.log(call);
  };

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <Box padding={5}>
          <Stack>
            <Typography variant="h4">Home</Typography>
            <PostInput onChange={(e) => setPostContent(e.target.value)} />
            <ButtonComponent onClick={handlePostSave} />
            {posts &&
              posts.posts.map((p) => (
                <PostCard
                  id={p.id}
                  key={p.id}
                  avatar={p.avatar}
                  author={p.name}
                  username={`@${p.username}`}
                  post={p.post}
                  date={p.date}
                  //@ts-ignore
                  comments={p.comments}
                />
              ))}
          </Stack>
        </Box>
      )}
    </>
  );
};
