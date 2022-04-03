import { Button, Stack } from "@mui/material";

export const PostInput = () => {
  return (
    <Stack paddingY={3}>
      <input style={{ height: 100, width: 750 }} />
      <Button variant="contained" sx={{ width: 750, marginY: 2 }}>
        <strong>Post</strong>
      </Button>
    </Stack>
  );
};
