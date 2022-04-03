import { Avatar, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";

interface PostCardProps {
  author: string;
  username: string;
  content: string;
  avatar: string;
}

export const PostCard = (props: PostCardProps) => {
  return (
    <Card
      variant="outlined"
      sx={{ maxWidth: 750, marginY: 1, borderRadius: 3 }}
    >
      <CardContent>
        <Stack direction="row" gap={2}>
          <Avatar src={props.avatar}></Avatar>
          <Typography marginY={1}>
            <strong>{props.author}</strong>
          </Typography>
          <Typography marginY={1}>{props.username}</Typography>
        </Stack>
        <Typography marginY={2}>{props.content}</Typography>
      </CardContent>
    </Card>
  );
};
