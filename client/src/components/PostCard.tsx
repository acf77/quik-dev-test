import { useState } from "react";

import {
  Avatar,
  Card,
  CardContent,
  ListItemIcon,
  Stack,
  Typography,
  Badge,
} from "@mui/material";

import Collapse from "@mui/material/Collapse";
import CommentIcon from "@mui/icons-material/Comment";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ListItemButton } from "@mui/material";

interface PostCommentsProps {
  id: number;
  content: string;
  date: string;
  username: string;
}

interface PostCardProps {
  id: number;
  avatar: string;
  author: string;
  username: string;
  post: string;
  date: string;
  comments: PostCommentsProps;
}

export const PostCard = (props: PostCardProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

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
        <Typography marginY={2}>{props.post}</Typography>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <CommentIcon />
          </ListItemIcon>
          {/* <ListItemText primary="Comments" /> */}
          <Badge
            sx={{ marginX: 2 }}
            //@ts-ignore
            badgeContent={props.comments.length}
            color="info"
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {/* @ts-ignore */}
          {props.comments.map((c: PostCommentsProps) => (
            <Typography sx={{ fontSize: 14, marginLeft: 3 }}>
              <strong>{c.username}</strong> <i>{c.content}</i>
            </Typography>
          ))}
        </Collapse>
      </CardContent>
    </Card>
  );
};
