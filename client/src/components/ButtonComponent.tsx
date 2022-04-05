import { Button, Stack } from "@mui/material";

interface PostInputProps {
  onClick: () => void;
}

export const ButtonComponent = ({ onClick }: PostInputProps) => {
  return (
    <Stack paddingY={3}>
      <Button
        onClick={onClick}
        variant="contained"
        sx={{ width: 750, marginY: 2 }}
      >
        <strong>Post</strong>
      </Button>
    </Stack>
  );
};
