import { Box, Stack, Typography } from "@mui/material";
import { PostCard } from "../components/PostCard";

import { PostInput } from "../components/PostInput";

import { postData } from "../postData";

export const HomeScreen = () => {
  return (
    <Box padding={5}>
      <Stack>
        <Typography variant="h4">Home</Typography>
        <PostInput />

        {postData.map((p) => (
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
  );
};
