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
            avatar={p.avatar}
            author={p.name}
            username={`@${p.username}`}
            content={p.content}
          />
        ))}
      </Stack>
    </Box>
  );
};
